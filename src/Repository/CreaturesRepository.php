<?php
	/*
	 * Repository/CreaturesRepository.php
	 */
	
	namespace App\Repository;
	
	use App\Entity\Creatures;
	use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
	use Symfony\Bridge\Doctrine\RegistryInterface;
	
	/**
	 * @method Creatures|null find($id, $lockMode = null, $lockVersion = null)
	 * @method Creatures|null findOneBy(array $criteria, array $orderBy = null)
	 * @method Creatures[]    findAll()
	 * @method Creatures[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
	 */
	class CreaturesRepository extends ServiceEntityRepository
	{
		/**
		 * CreaturesRepository constructor.
		 * @param RegistryInterface $registry
		 */
		public function __construct(RegistryInterface $registry)
		{
			parent::__construct($registry, Creatures::class);
		}
		
		/**
		 * @param $mots
		 * @return mixed
		 */
		//recherche dans creatures.nom, creatures.textlead, films.titre, tags.nom des mot-cles
		public function findByWord($mots)
		{
			$query = $this->createQueryBuilder('c');
			$query->join('c.film', 'f')
				  ->join('c.tags', 't')
				  ->addSelect('f','t');
			foreach ($mots as $val){
			    $query->orWhere("c.nom LIKE '%".$val."%'" )
				      ->orWhere("c.textelead LIKE '%".$val."%'" )
				      ->orWhere("f.titre LIKE '%".$val."%'" )
				      ->orWhere("t.nom LIKE '%".$val."%'" );
			}
		
			return $query->getQuery()->getResult();
		}
		
		/**
		 * @param int $tag
		 * @return mixed
		 */
		//recherche des Creatures par un Tag
		public function findByTags(int $tag)
		{
			$qb = $this->createQueryBuilder('c')
	            ->leftJoin ('tags','t')
	            ->where('t.id = :id')
	            ->setParameter('id', $tag);
         
	        $query = $qb->getQuery();
	        $results = $query->getResult();
	        return $results;
		}
		
	}
