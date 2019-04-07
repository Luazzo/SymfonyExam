<?php
	/*
	 * controller/CreaturesController.php
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
use App\Repository\CreaturesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


/**
 * Class CreaturesController
 * @package App\Controller
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
	 * @return Response
	 */
	//charge la liste de toutes les Creatures
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
	 * @param Request $request
	 * @return Response
	 * @Route("/add", name="new", methods={"GET","POST"})
	 */
	//création d'une nouvelle Créature
	public function add(Request $request): Response
    {
    	//instantiation de la class Creature
        $creature = new Creatures();
        //chargement de la form de la class CreationType
        $form = $this->createForm(CreaturesType::class, $creature);
        $form->handleRequest($request);
		//validation des données
        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            //preparation des données à l'enregistrement
            $entityManager->persist($creature);
            //enregistrement dans la BD
            $entityManager->flush();
            //affichage du message
            $this->addFlash('Nouvelle creature a été crée');
			//redirection vers la page avec des détails sur cette Creature
            return $this->redirectToRoute('app_creatures_show', [
            	'id' => $creature->getId(),
	            'slug' => $creature->getSlug()
            ]);
        }
		//affichage de la page avec un formulaire pour la creation d'une nouvelle Creature
        return $this->render('creatures/new.html.twig', [
            'creature' => $creature,
            'form' => $form->createView(),
	        'submit' => 'Ajouter'
        ]);
    }
	
	/**
	 * @param Creatures $creature
	 * @return Response
	 * @Route("/{id}/{slug}", name="show", methods={"GET"},requirements={"id"="\d+", "slug": "[a-z][a-z0-9\-]*"})
	 */
	//affichage d'une page avec des details sur une Creature
	public function show(Creatures $creature): Response
    {
        return $this->render('creatures/show.html.twig', [
            'creature' => $creature
        ]);
    }
	
	/**
	 * @param Request $request
	 * @param Creatures $creature
	 * @return Response
	 * @Route("/{id}/{slug}/edit", name="edit", methods={"GET","POST"},requirements={"id"="\d+", "slug": "[a-z][a-z0-9\-]*"})
	 */
	//modification d'une Creature
	public function edit(Request $request, Creatures $creature): Response
    {
    	//chargement de form
        $form = $this->createForm(CreaturesType::class, $creature);
        $form->handleRequest($request);
		//si le form est envoié et des données sont validés
        if ($form->isSubmitted() && $form->isValid()) {
        	//enregistre des modifications
            $this->getDoctrine()->getManager()->flush();
            //affichage du message
            $this->addFlash("success",'Nouvelle creature a été modifié');
			//passage a la page avec des details sur une Creature
            return $this->redirectToRoute('app_creatures_show', [
            	'id' => $creature->getId(),
	            'slug' => $creature->getSlug()
            ]);
        }
		//affichage de la page avec un formulaire pour la creation d'une nouvelle Creature
        return $this->render('creatures/edit.html.twig', [
            'creature' => $creature,
            'form' => $form->createView(),
	        'submit' => 'Modifier'
        ]);
    }
	
	/**
	 * @param Request $request
	 * @param Creatures $creature
	 * @return Response
	 * @Route("/{id}/{slug}/delete", name="delete", methods={"DELETE"}, requirements={"id"="\d+", "slug": "[a-z][a-z0-9\-]*"})
	 */
	//suppression d'une Creature
	public function delete(Request $request, Creatures $creature): Response
    {
        //verification du token
        if ($this->isCsrfTokenValid('delete'.$creature->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            //suppression de la BD
            $entityManager->remove($creature);
            //affichage du message
            $entityManager->flush();
            $this->addFlash("success",'Nouvelle creature a été supprimé');
        }
		//affichage de la page avec le form pour la modification
        return $this->redirectToRoute('app_pages_show', [
        	'id' => 2,
	        'slug' => "creatures"
        ]);
    }
	
	
	/**
	 * @param Request $request
	 * @return Response
	 * @Route("/search/{search}", name="search", methods={"GET"},defaults={"search"=NULL})
	 */
	//recherche des Creatures par des mot-cles
	public function recherche(Request $request)
	{
		//recuperation paramettres passés via methode GET
		$motCles =$request->query->get('search');
		//si le form n'etait pas vide
		if($motCles!= NULL ){
			//retourne un array avec des mot-cles
			$mots = explode(" ", $motCles);
			//recherche dans la BD des Creatures correspondantes à la recherche
			$creatures = $this->_repository->findByWord($mots);
			//affichage de la page avec le resultat de la recherche
			return $this->render('creatures/details_recherche.html.twig',[
				'creatures' => $creatures,
				'motsCles' => $motCles
			]);
		}
		//si le form etait vide retourne à l'index
        return $this->redirectToRoute('index');
    }
}
