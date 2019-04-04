<?php
	
	/*
	 *  controller/PagesController.php
	 *  Entity Pages
	 *
	 *  ROUTES:
		     -------------------------- ---------- -------- ------ -----------------------------------
			  Name                       Method     Scheme   Host   Path
			 -------------------------- ---------- -------- ------ -----------------------------------

	 *        app_pages_index            GET        ANY      ANY    /pages/
			  app_pages_new              GET|POST   ANY      ANY    /pages/new
			  app_pages_show             GET        ANY      ANY    /pages/{id}/{slug}
			  app_pages_edit             GET|POST   ANY      ANY    /pages/{id}/edit
			  app_pages_delete           DELETE     ANY      ANY    /pages/{id}
		      index                      ANY        ANY      ANY    /
	 *
	 */

namespace App\Controller;

use App\Entity\Pages;
use App\Form\PagesType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/pages", name="app_pages_")
 */
class PagesController extends AbstractController
{
    /**
     * @Route("/", name="index", methods={"GET"})
     */
    public function index(): Response
    {
        $pages = $this->getDoctrine()
            ->getRepository(Pages::class)
            ->findBy([],['tri'=>'ASC']);

        return $this->render('pages/index.html.twig', [
            'pages' => $pages,
        ]);
    }

    /**
     * @Route("/new", name="new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $page = new Pages();
        $form = $this->createForm(PagesType::class, $page);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($page);
            $entityManager->flush();

            return $this->redirectToRoute('pages_index');
        }

        return $this->render('pages/new.html.twig', [
            'page' => $page,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/{slug}", name="show", methods={"GET"})
     */
    public function show(Pages $page): Response
    {
        return $this->render('pages/show.html.twig', [
            'page' => $page,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Pages $page): Response
    {
        $form = $this->createForm(PagesType::class, $page);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('pages_index', [
                'id' => $page->getId(),
            ]);
        }

        return $this->render('pages/edit.html.twig', [
            'page' => $page,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="delete", methods={"DELETE"})
     */
    public function delete(Request $request, Pages $page): Response
    {
        if ($this->isCsrfTokenValid('delete'.$page->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($page);
            $entityManager->flush();
        }

        return $this->redirectToRoute('pages_index');
    }
}
