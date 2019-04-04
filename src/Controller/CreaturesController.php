<?php
	/*
	 * controller/CreaturesController.php
	 *  Entity Creatures
	 *
	 *  ROUTES:
		     -------------------------- ---------- -------- ------ -----------------------------------
			  Name                       Method     Scheme   Host   Path
			 -------------------------- ---------- -------- ------ -----------------------------------

	 *        app_creatures_index        GET        ANY      ANY    /creatures/
			  app_creatures_new          GET|POST   ANY      ANY    /creatures/add
			  app_creatures_show         GET        ANY      ANY    /creatures/{id}/{slug}
			  app_creatures_edit         GET|POST   ANY      ANY    /creatures/{id}/{slug}/edit
			  app_creatures_delete       DELETE     ANY      ANY    /creatures/{id}/{slug}/delete
			  app_creatures_search       POST       ANY      ANY    /creatures/search/mots-cles
	 *
	 */

namespace App\Controller;

use App\Entity\Creatures;
use App\Form\CreaturesType;
use App\Form\SearchType;
use App\Repository\CreaturesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormFactory;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/creatures", name="app_creatures_")
 */
class CreaturesController extends AbstractController
{
	
	/**
	 * @var CreaturesRepository
	 */
	private $_repository;
	
	/**
	 * CreaturesController constructor.
	 * @param CreaturesRepository $repository
	 */
	public function __construct(CreaturesRepository $repository){
		$this->_repository = $repository;
	}
    /**
     * @Route("/", name="index", methods={"GET"})
     */
    public function index(): Response
    {
        $creatures = $this->getDoctrine()
            ->getRepository(Creatures::class)
            ->findAll();

        return $this->render('creatures/index.html.twig', [
            'creatures' => $creatures,
        ]);
    }

    /**
     * @Route("/add", name="new", methods={"GET","POST"})
     */
    public function add(Request $request): Response
    {
        $creature = new Creatures();
        $form = $this->createForm(CreaturesType::class, $creature);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($creature);
            $entityManager->flush();

            return $this->redirectToRoute('app_creatures_show', [
            	'id' => $creature->getId(),
	            'slug' => $creature->getSlug()
            ]);
        }

        return $this->render('creatures/new.html.twig', [
            'creature' => $creature,
            'form' => $form->createView(),
	        'submit' => 'Ajouter'
        ]);
    }

    /**
     * @Route("/{id}/{slug}", name="show", methods={"GET"})
     */
    public function show(Creatures $creature): Response
    {
        return $this->render('creatures/show.html.twig', [
            'creature' => $creature,
        ]);
    }

    /**
     * @Route("/{id}/{slug}/edit", name="edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Creatures $creature): Response
    {
        $form = $this->createForm(CreaturesType::class, $creature);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('app_creatures_show', [
            	'id' => $creature->getId(),
	            'slug' => $creature->getSlug()
            ]);
        }

        return $this->render('creatures/edit.html.twig', [
            'creature' => $creature,
            'form' => $form->createView(),
	        'submit' => 'Modifier'
        ]);
    }

    /**
     * @Route("/{id}/{slug}/delete", name="delete", methods={"DELETE"})
     */
    public function delete(Request $request, Creatures $creature): Response
    {
        if ($this->isCsrfTokenValid('delete'.$creature->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($creature);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_pages_show', [
        	'id' => 2,
	        'slug' => "creatures"
        ]);
    }
	
	
	/**
	 * @param Request $request
	 * @return Response
	 * @Route("/search", name="search", methods={"GET"})
	 */
	public function rechercheMotsCles(Request $request)
	{
			$motCles =$request->query->get('search');
		if($motCles != null){
		
			$mots = explode(" ", $motCles);
			
			$creatures = $this->_repository->findByWord($mots);
			
			//dump($creatures); die();
			return $this->render('creatures/details_recherche.html.twig',[
				'creatures' => $creatures,
				'motsCles' => $motCles
			]);
		}
		
        return $this->redirectToRoute('index');
    }
}
