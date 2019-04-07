<?php

	
	/*
	 *  controller/FilmsController.php
	 *
	 *  ROUTES:
		     -------------------------- ---------- -------- ------ -----------------------------------
			  Name                       Method     Scheme   Host   Path
			 -------------------------- ---------- -------- ------ -----------------------------------

	 *        app_films_index            GET        ANY      ANY    /films/
			  app_films_show             GET        ANY      ANY    /films/{id}/{slug}
	 *
	 */
namespace App\Controller;

use App\Entity\Films;
use App\Entity\Creatures;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


/**
 * Class FilmsController
 * @package App\Controller
 * @Route("/films", name="app_films_")
 */
class FilmsController extends AbstractController
{
	
	/**
	 * @return Response
	 */
	//retourne la liste des Films
	public function index(): Response
    {
        $films = $this->getDoctrine()
            ->getRepository(Films::class)
            ->findAll();

        return $this->render('films/index.html.twig', [
            'films' => $films,
        ]);
    }
	
	/**
	 * @param Films $film
	 * @return Response
	 * @Route("/{id}/{slug}", name="show", methods={"GET"},requirements={"id"="\d+", "slug": "[a-z][a-z0-9\-]*"})
	 */
	//affichge des detail sur un Film
	public function show(Films $film): Response
    {
    	$creatures = $this->getDoctrine()
            ->getRepository(Creatures::class)
            ->findBy(
            	['film' => $film->getId()]
            );
    	
        return $this->render('films/show.html.twig', [
            'film' => $film,
	        'creatures' => $creatures
        ]);
    }
}
