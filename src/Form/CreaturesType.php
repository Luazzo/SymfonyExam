<?php
	/*
	 * Form/CreaturesType.php
	 */

namespace App\Form;

use App\Entity\Creatures;
use App\Entity\Films;
use App\Entity\Tags;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class CreaturesType
 * @package App\Form
 */
class CreaturesType extends AbstractType
{
	/**
	 * @param FormBuilderInterface $builder
	 * @param array $options
	 */
	public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('nom',TextType::class,[
            	'label' => false,
            	'attr' => [
            	    'placeholder' => 'Nom de la creature',
            		'class' => 'form-control'
	            ]
            ])
            ->add('textelead', TextareaType::class,[
            	'label' => false,
            	'attr' => [
            	    'placeholder' => 'Texte principal',
            		'class' => 'form-control'
	            ]
            ])
            ->add('textesuite', TextareaType::class,[
            	'label' => false,
            	'attr' => [
            	    'placeholder' => 'Suite...',
            		'class' => 'form-control'
	            ]
            ])
            ->add('image',TextType::class,[
            	'label' => false,
            	'attr' => [
            	    'placeholder' => 'Image',
            		'class' => 'form-control'
	            ]
            ])
            ->add('film',EntityType::class,[
                'label' => false,
                'class' => Films::class,
                'choice_value' => 'id',
                'choice_label' => 'titre',
	            'attr' => [
                    'class' => 'form-control'
	            ]
            ])
	        ->add('tags', EntityType::class, [
                'label' => false,
                'class' => Tags::class,
                'choice_value' => 'id',
                'choice_label' => 'nom',
                'multiple' => true,
                'expanded' => true,
	            'attr' => [
	                'class' => 'checkboxes'
                ]
             ]);
	        
    }
	
	/**
	 * @param OptionsResolver $resolver
	 */
	public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Creatures::class,
        ]);
    }
}
