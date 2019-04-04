<?php

	
	/*
	 *  controller/FilmsController.php
	 *  Entity Films
	 *
	 *  ROUTES:
		     -------------------------- ---------- -------- ------ -----------------------------------
			  Name                       Method     Scheme   Host   Path
			 -------------------------- ---------- -------- ------ -----------------------------------

	 *        app_films_index            GET        ANY      ANY    /films/
			  app_films_new              GET|POST   ANY      ANY    /films/new
			  app_films_show             GET        ANY      ANY    /films/{id}/{slug}
			  app_films_edit             GET|POST   ANY      ANY    /films/{id}/edit
			  app_films_delete           DELETE     ANY      ANY    /films/{id}
	 *
	 */
namespace App\Controller;

use App\Entity\Films;
use App\Entity\Creatures;
use App\Form\FilmsType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/films", name="app_films_")
 */
class FilmsController extends AbstractController
{
    /**
     * @Route("/", name="index", methods={"GET"})
     */
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
     * @Route("/new", name="new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $film = new Films();
        $form = $this->createForm(FilmsType::class, $film);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($film);
            $entityManager->flush();

            return $this->redirectToRoute('films_index');
        }

        return $this->render('films/new.html.twig', [
            'film' => $film,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/{slug}", name="show", methods={"GET"})
     */
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

    /**
     * @Route("/{id}/edit", name="edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Films $film): Response
    {
        $form = $this->createForm(FilmsType::class, $film);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('films_index', [
                'id' => $film->getId(),
            ]);
        }

        return $this->render('films/edit.html.twig', [
            'film' => $film,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="delete", methods={"DELETE"})
     */
    public function delete(Request $request, Films $film): Response
    {
        if ($this->isCsrfTokenValid('delete'.$film->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($film);
            $entityManager->flush();
        }

        return $this->redirectToRoute('films_index');
    }
}
