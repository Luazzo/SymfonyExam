<?php
	/*
	 * Entity/Creatures.php
	 * Entity Creatures :
			  id
			  nom
			  texteLead
			  texteSuite
			  dateCreation
			  image
			  film
			  slug
	 */

namespace App\Entity;

use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * Creatures
 *
 * @ORM\Table(name="creatures", indexes={@ORM\Index(name="fk_creatures_films_idx", columns={"film"})})
 * @ORM\Entity
 */
class Creatures
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
     * @var string|null
     *
     * @ORM\Column(name="texteLead", type="text", length=65535, nullable=true)
     */
    private $textelead;

    /**
     * @var string|null
     *
     * @ORM\Column(name="texteSuite", type="text", length=65535, nullable=true)
     */
    private $textesuite;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="dateCreation", type="datetime", nullable=false)
     */
    private $datecreation;

    /**
     * @var string|null
     *
     * @ORM\Column(name="image", type="string", length=45, nullable=true)
     */
    private $image;

    /**
     * @var string
     * @Gedmo\Slug(fields={"nom"})
     * @ORM\Column(name="slug", type="string", length=45, nullable=false)
     */
    private $slug;

    /**
     * @var Films
     *
     * @ORM\ManyToOne(targetEntity="Films")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="film", referencedColumnName="id")
     * })
     */
    private $film;

    /**
     *
     * @ORM\ManyToMany(targetEntity="Tags", inversedBy="creatures")
     * @ORM\JoinTable(name="creatures_has_tags",
     *   joinColumns={
     *     @ORM\JoinColumn(name="creature", referencedColumnName="id")
     *   },
     *   inverseJoinColumns={
     *     @ORM\JoinColumn(name="tag", referencedColumnName="id")
     *   }
     * )
     */
    private $tags;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->tags = new \Doctrine\Common\Collections\ArrayCollection();
        $this->datecreation = new \DateTime();
    }
	
	/**
	 * @return Collection
	 */
	public function getTags(): Collection
      	{
      		return $this->tags;
      	}
	
	/**
	 * @param Collection $tags
	 */
	public function setTags(Collection $tags): void
      	{
      		$this->tags = $tags;
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
	 * @return Creatures
	 */
	public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }
	
	/**
	 * @return string|null
	 */
	public function getTextelead(): ?string
    {
        return $this->textelead;
    }
	
	/**
	 * @param string|null $textelead
	 * @return Creatures
	 */
	public function setTextelead(?string $textelead): self
    {
        $this->textelead = $textelead;

        return $this;
    }
	
	/**
	 * @return string|null
	 */
	public function getTextesuite(): ?string
    {
        return $this->textesuite;
    }
	
	/**
	 * @param string|null $textesuite
	 * @return Creatures
	 */
	public function setTextesuite(?string $textesuite): self
    {
        $this->textesuite = $textesuite;

        return $this;
    }
	
	/**
	 * @return \DateTimeInterface|null
	 */
	public function getDatecreation(): ?\DateTimeInterface
    {
        return $this->datecreation;
    }
	
	/**
	 * @param \DateTimeInterface $datecreation
	 * @return Creatures
	 */
	public function setDatecreation(\DateTimeInterface $datecreation): self
    {
        $this->datecreation = $datecreation;

        return $this;
    }
	
	/**
	 * @return string|null
	 */
	public function getImage(): ?string
    {
        return $this->image;
    }
	
	/**
	 * @param string|null $image
	 * @return Creatures
	 */
	public function setImage(?string $image): self
    {
        $this->image = $image;

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
	 * @param string $nom
	 * @return Creatures
	 */
	public function setSlug(string $nom): self
    {
        $this->slug = strtolower($nom);

        return $this;
    }
	
	/**
	 * @return Films|null
	 */
	public function getFilm(): ?Films
    {
        return $this->film;
    }
	
	/**
	 * @param Films|null $film
	 * @return Creatures
	 */
	public function setFilm(?Films $film): self
    {
        $this->film = $film;

        return $this;
    }
	
	/**
	 * @param Tags $tag
	 * @return Creatures
	 */
	public function addTag(Tags $tag): self
    {
        if (!$this->tags->contains($tag)) {
            $this->tags[] = $tag;
        }

        return $this;
    }
	
	/**
	 * @param Tags $tag
	 * @return Creatures
	 */
	public function removeTag(Tags $tag): self
    {
        if ($this->tags->contains($tag)) {
            $this->tags->removeElement($tag);
        }

        return $this;
    }


}
