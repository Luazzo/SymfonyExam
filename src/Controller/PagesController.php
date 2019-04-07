<?php
	
	/*
	 *  controller/PagesController.php
	 *
	 *  ROUTES:
		     -------------------------- ---------- -------- ------ -----------------------------------
			  Name                       Method     Scheme   Host   Path
			 -------------------------- ---------- -------- ------ -----------------------------------

	 *        app_pages_index            GET        ANY      ANY    /pages/
			  app_pages_show             GET        ANY      ANY    /pages/{id}/{slug}
		   
	 *
	 */

namespace App\Controller;

use App\Entity\Pages;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


/**
 * Class PagesController
 * @package App\Controller
 * @Route("/pages", name="app_pages_")
 */
class PagesController extends AbstractController
{
	
	/**
	 * @return Response
	 * retourne toutes les Pages
	*/
	public function index($id = 1): Response
    {
        $pages = $this->getDoctrine()
            ->getRepository(Pages::class)
            ->findBy([],['tri'=>'ASC']);

        return $this->render('pages/index.html.twig', [
            'pages' => $pages,
	        'idPage' => $id
        ]);
    }
	
	/**
	 * @param Pages $page
	 * @return Response
	 * @Route("/{id}/{slug}", name="show", methods={"GET"})
	 */
	//affihage d'une Page
	public function show(Pages $page): Response
    {
        return $this->render('pages/show.html.twig', [
            'page' => $page,
        ]);
    }
}
