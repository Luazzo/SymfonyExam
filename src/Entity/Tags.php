<?php

	/*
	 * Entity/Tags.php
	 * Entity Tags :
			  id
			  nom
			  slug
	 */
namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * Tags
 *
 * @ORM\Table(name="tags")
 * @ORM\Entity
 */
class Tags
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=false, options={"unsigned"=true})
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="nom", type="string", length=45, nullable=false)
     */
    private $nom;

    /**
     * @var string
     * @Gedmo\Slug(fields={"nom"})
     *
     * @ORM\Column(name="slug", type="string", length=45, nullable=false)
     */
    private $slug;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Creatures", mappedBy="tags")
     */
    private $creatures;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->creatures = new \Doctrine\Common\Collections\ArrayCollection();
    }
	
	/**
	 * @return int|null
	 */
	public function getId(): ?int
    {
        return $this->id;
    }
	
	/**
	 * @return string|null
	 */
	public function getNom(): ?string
    {
        return $this->nom;
    }
	
	/**
	 * @param string $nom
	 * @return Tags
	 */
	public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }
	
	/**
	 * @return string|null
	 */
	public function getSlug(): ?string
    {
        return $this->slug;
    }
	
	/**
	 * @param string $slug
	 * @return Tags
	 */
	public function setSlug(string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    /**
     * @return Collection|Creatures[]
     */
    public function getCreatures(): Collection
    {
        return $this->creatures;
    }
	
	/**
	 * @param Creatures $creature
	 * @return Tags
	 */
	public function addCreature(Creatures $creature): self
    {
        if (!$this->creatures->contains($creature)) {
            $this->creatures[] = $creature;
            $creature->addTag($this);
        }

        return $this;
    }
	
	/**
	 * @param Creatures $creature
	 * @return Tags
	 */
	public function removeCreature(Creatures $creature): self
    {
        if ($this->creatures->contains($creature)) {
            $this->creatures->removeElement($creature);
            $creature->removeTag($this);
        }

        return $this;
    }

}
