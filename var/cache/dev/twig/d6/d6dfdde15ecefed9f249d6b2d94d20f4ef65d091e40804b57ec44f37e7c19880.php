<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* films/index.html.twig */
class __TwigTemplate_d1dd43926bd4afa92ed29b6ffbe44b46197746edc44b18b3915741c3aaa28b9e extends \Twig\Template
{
    private $source;

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
            'comments' => [$this, 'block_comments'],
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "films/index.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "films/index.html.twig"));

        // line 1
        $this->displayBlock('comments', $context, $blocks);
        // line 15
        echo "
<div class=\"row\">
    
    ";
        // line 18
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["films"]) || array_key_exists("films", $context) ? $context["films"] : (function () { throw new RuntimeError('Variable "films" does not exist.', 18, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["film"]) {
            // line 19
            echo "        
        <div class=\"col-md-4\">
            <a href=\"";
            // line 21
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_films_show", ["id" => twig_get_attribute($this->env, $this->source, $context["film"], "id", []), "slug" => twig_get_attribute($this->env, $this->source, $context["film"], "slug", [])]), "html", null, true);
            echo "\">
                <img class=\"img-fluid rounded mb-3 mb-md-0\" src=\"";
            // line 22
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl((("build/assets/images/" . twig_random($this->env, 24, 30)) . ".jpg")), "html", null, true);
            echo "\" alt=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["film"], "titre", []), "html", null, true);
            echo "\">
            </a>
        </div>
        <div class=\"col-md-8\">
            <h3>";
            // line 26
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["film"], "titre", []), "html", null, true);
            echo "</h3>
            <p>";
            // line 27
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["film"], "synopsis", []), "html", null, true);
            echo "</p>
            <a class=\"btn btn-primary\" href=\"";
            // line 28
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_films_show", ["id" => twig_get_attribute($this->env, $this->source, $context["film"], "id", []), "slug" => twig_get_attribute($this->env, $this->source, $context["film"], "slug", [])]), "html", null, true);
            echo "\">Voir les détails du film</a>
            <hr/>
        </div>
        
    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['film'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 33
        echo "    
</div>
";
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 1
    public function block_comments($context, array $blocks = [])
    {
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "comments"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "comments"));

        // line 2
        echo "    <!-- ./templates/films/index.html.twig
        Class Films :
            id
            titre
            synopsis
            slug
        
        Dans le fichier de BD donné il n'y avait pas de champ IMAGE,
        mais dans l'example de la page \"Les Films\" il y a des balises prevues pour placer des images,
        alors j'ai laissé des balises
    -->
    
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "films/index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  110 => 2,  101 => 1,  89 => 33,  78 => 28,  74 => 27,  70 => 26,  61 => 22,  57 => 21,  53 => 19,  49 => 18,  44 => 15,  42 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% block comments %}
    <!-- ./templates/films/index.html.twig
        Class Films :
            id
            titre
            synopsis
            slug
        
        Dans le fichier de BD donné il n'y avait pas de champ IMAGE,
        mais dans l'example de la page \"Les Films\" il y a des balises prevues pour placer des images,
        alors j'ai laissé des balises
    -->
    
{% endblock %}

<div class=\"row\">
    
    {% for film in films %}
        
        <div class=\"col-md-4\">
            <a href=\"{{ path('app_films_show', {'id': film.id, 'slug':film.slug}) }}\">
                <img class=\"img-fluid rounded mb-3 mb-md-0\" src=\"{{ asset('build/assets/images/'~random(24,30)~'.jpg') }}\" alt=\"{{ film.titre }}\">
            </a>
        </div>
        <div class=\"col-md-8\">
            <h3>{{ film.titre }}</h3>
            <p>{{ film.synopsis }}</p>
            <a class=\"btn btn-primary\" href=\"{{ path('app_films_show', {'id': film.id, 'slug':film.slug}) }}\">Voir les détails du film</a>
            <hr/>
        </div>
        
    {% endfor %}
    
</div>
", "films/index.html.twig", "C:\\wamp64\\www\\BESWEB_2_2018-2019\\Tsimpilova_SymfonyExam_2019\\templates\\films\\index.html.twig");
    }
}
