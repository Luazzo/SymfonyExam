<?php
	
	/*
	 *  controller/TagsController.php
	 *
	 *  ROUTES:
		     -------------------------- ---------- -------- ------ -----------------------------------
			  Name                       Method     Scheme   Host   Path
			 -------------------------- ---------- -------- ------ -----------------------------------

	 *        app_tags_index             GET        ANY      ANY    /tags/
			  app_tags_show              GET        ANY      ANY    /tags/{id}/{slug}
	 *
	 */
	
	namespace App\Controller;
	
	use App\Entity\Tags;
	use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
	use Symfony\Component\HttpFoundation\Request;
	use Symfony\Component\HttpFoundation\Response;
	use Symfony\Component\Routing\Annotation\Route;
	
	
	/**
	 * Class TagsController
	 * @package App\Controller
	 * @Route("/tags", name="app_tags_")
	 */
	class TagsController extends AbstractController
	{
		/**
		 * @Route("/", name="index", methods={"GET"})
		 * @return Response
		 * retourne touts les tags
		 */
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
		 * @param Tags $tag
		 * @return Response
		 * @Route("/{id}/{slug}", name="show", methods={"GET"},requirements={"id"="\d+", "slug": "[a-z][a-z0-9\-]*"})
		 * retourne la page avec details sur un Tag
		 */
		//affichage de la Page avec des detail sur un Tag avec la list des Creatures correspondantes à ce Tag
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
	}