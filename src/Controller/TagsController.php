<?php
	
	/*
	 *  controller/TagsController.php
	 *  Entity Tags
	 *
	 *  ROUTES:
		     -------------------------- ---------- -------- ------ -----------------------------------
			  Name                       Method     Scheme   Host   Path
			 -------------------------- ---------- -------- ------ -----------------------------------

	 *        app_tags_index             GET        ANY      ANY    /tags/
			  app_tags_new               GET|POST   ANY      ANY    /tags/new
			  app_tags_show              GET        ANY      ANY    /tags/{id}/{slug}
			  app_tags_edit              GET|POST   ANY      ANY    /tags/{id}/edit
			  app_tags_delete            DELETE     ANY      ANY    /tags/{id}
	 *
	 */
	
	namespace App\Controller;
	
	use App\Entity\Tags;
	use App\Form\TagsType;
	use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
	use Symfony\Component\HttpFoundation\Request;
	use Symfony\Component\HttpFoundation\Response;
	use Symfony\Component\Routing\Annotation\Route;
	
	/**
	 * @Route("/tags", name="app_tags_")
	 */
	class TagsController extends AbstractController
	{
		/**
		 * @Route("/", name="index", methods={"GET"})
		 */
		//retourne touts les tags
		public function index(): Response
		{
			$tags = $this->getDoctrine()
				->getRepository(Tags::class)
				->findAll();
			
			return $this->render('tags/index.html.twig', [
				'tags' => $tags,
			]);
		}
		
		/**
		 * @Route("/new", name="new", methods={"GET","POST"})
		 */
		//charge une page avec la form et fait enregistrement dans la BD le nouveau Tag
		public function new(Request $request): Response
		{
			//instancie un objet de class Tag
			$tag = new Tags();
			//chargement de la form de la class TagsType
			$form = $this->createForm(TagsType::class, $tag);
			//capte le moment quand la form est envoyée
			$form->handleRequest($request);
			//verifie que la form est envoyée et les données sont valides; enregistre dans la BD
			if ($form->isSubmitted() && $form->isValid()) {
				$entityManager = $this->getDoctrine()->getManager();
				$entityManager->persist($tag);
				$entityManager->flush();
				//redirection vers la page index des Tags
				return $this->redirectToRoute('tags_index');
			}
			//retourn le vue avec la form
			return $this->render('tags/new.html.twig', [
				'tag' => $tag,
				'form' => $form->createView(),
			]);
		}
		
		/**
		 * @Route("/{id}/{slug}", name="show", methods={"GET"})
		 */
		//retourne la page avec details sur un Tag
		public function show(Tags $tag): Response
		{
			/*
			$creatures = $this->getDoctrine()
				 ->getRepository(Creatures::class)
			
			Au début j'ai utilisé la fonction findBy
			Mais elle ne marche pas,
			ERROR : Column not found: 1054 Champ 'creatures_has_tags.tag' inconnu dans where clause
				 ->findBy(
					['tags' => $tag->getId()],
				  ['nom' => 'ASC']
				 )
			sur le forum est conseillé de créer une fonction soi-même avec JOIN :
				 ->findByTags($tag->getId());
			*/
			
			return $this->render('tags/show.html.twig', [
				'tag' => $tag,
				'creatures' => $tag->getCreatures() // mais j'ai decidé quand-même utiliser le methode de la class Tag
			]);
		}
		
		
		/**
		 * @Route("/{id}/edit", name="edit", methods={"GET","POST"})
		 */
		//retourne une page avec un formulaire pour modifier un Tag
		public function edit(Request $request, Tags $tag): Response
		{
			$form = $this->createForm(TagsType::class, $tag);
			$form->handleRequest($request);
			
			//verifie des données et enregistre dans la BD
			if ($form->isSubmitted() && $form->isValid()) {
				$this->getDoctrine()->getManager()->flush();
				
				return $this->redirectToRoute('tags_index', [
					'id' => $tag->getId(),
				]);
			}
			
			return $this->render('tags/edit.html.twig', [
				'tag' => $tag,
				'form' => $form->createView(),
			]);
		}
		
		/**
		 * @Route("/{id}", name="delete", methods={"DELETE"})
		 */
		public function delete(Request $request, Tags $tag): Response
		{
			if ($this->isCsrfTokenValid('delete'.$tag->getId(), $request->request->get('_token'))) {
				$entityManager = $this->getDoctrine()->getManager();
				$entityManager->remove($tag);
				$entityManager->flush();
			}
			
			return $this->redirectToRoute('tags_index');
		}
	}
