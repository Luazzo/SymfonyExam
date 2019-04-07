<?php

	/*
	 * Entity/Pages.php
	 * Entity Pages :
			id
			titre
			slug
			texte
			tri
	
	 */
namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * Pages
 *
 * @ORM\Table(name="pages")
 * @ORM\Entity
 */
class Pages
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
     * @ORM\Column(name="titre", type="string", length=45, nullable=false)
     */
    private $titre;

    /**
     * @var string
     * @Gedmo\Slug(fields={"titre"})
     *
     * @ORM\Column(name="slug", type="string", length=45, nullable=false)
     */
    private $slug;

    /**
     * @var string|null
     *
     * @ORM\Column(name="texte", type="text", length=65535, nullable=true)
     */
    private $texte;

    /**
     * @var int
     *
     * @ORM\Column(name="tri", type="integer", nullable=false)
     */
    private $tri;
	
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
	public function getTitre(): ?string
    {
        return $this->titre;
    }
	
	/**
	 * @param string $titre
	 * @return Pages
	 */
	public function setTitre(string $titre): self
    {
        $this->titre = $titre;

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
	 * @return Pages
	 */
	public function setSlug(string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }
	
	/**
	 * @return string|null
	 */
	public function getTexte(): ?string
    {
        return $this->texte;
    }
	
	/**
	 * @param string|null $texte
	 * @return Pages
	 */
	public function setTexte(?string $texte): self
    {
        $this->texte = $texte;

        return $this;
    }
	
	/**
	 * @return int|null
	 */
	public function getTri(): ?int
    {
        return $this->tri;
    }
	
	/**
	 * @param int $tri
	 * @return Pages
	 */
	public function setTri(int $tri): self
    {
        $this->tri = $tri;

        return $this;
    }


}
