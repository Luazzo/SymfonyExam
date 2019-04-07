<?php
	
	/*
	 * Entity/Films.php
	 * Entity Films :
		    id
			titre
			synopsis
			slug
	 */

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * Films
 *
 * @ORM\Table(name="films")
 * @ORM\Entity
 */
class Films
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
     * @var string|null
     *
     * @ORM\Column(name="synopsis", type="text", length=65535, nullable=true)
     */
    private $synopsis;

    /**
     * @var string
     * @Gedmo\Slug(fields={"titre"})
     *
     * @ORM\Column(name="slug", type="string", length=45, nullable=false)
     */
    private $slug;
	
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
	 * @return Films
	 */
	public function setTitre(string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }
	
	/**
	 * @return string|null
	 */
	public function getSynopsis(): ?string
    {
        return $this->synopsis;
    }
	
	/**
	 * @param string|null $synopsis
	 * @return Films
	 */
	public function setSynopsis(?string $synopsis): self
    {
        $this->synopsis = $synopsis;

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
	 * @return Films
	 */
	public function setSlug(string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }


}
