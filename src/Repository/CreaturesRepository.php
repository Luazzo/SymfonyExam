<?php
	
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
		public function __construct(RegistryInterface $registry)
		{
			parent::__construct($registry, Creatures::class);
		}
		
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
		
		
		
		// /**
		//  * @return Creatures[] Returns an array of Auteur objects
		//  */
		/*
		public function findByExampleField($value)
		{
			return $this->createQueryBuilder('c')
				->andWhere('c.exampleField = :val')
				->setParameter('val', $value)
				->orderBy('c.id', 'ASC')
				->setMaxResults(10)
				->getQuery()
				->getResult()
			;
		}
		*/
		
		/*
		public function findOneBySomeField($value): ?Creatures
		{
			return $this->createQueryBuilder('c')
				->andWhere('c.exampleField = :val')
				->setParameter('val', $value)
				->getQuery()
				->getOneOrNullResult()
			;
		}
		*/
	}
