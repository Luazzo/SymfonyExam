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

/* pages/index.html.twig */
class __TwigTemplate_9d35fb1fae3a39747a6c2d4103773fe0cb566ebb3132e8f862832d6abc0b6eae extends \Twig\Template
{
    private $source;

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "pages/index.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "pages/index.html.twig"));

        // line 1
        echo "
<!--templates/pages/index.html.twig
    Entity Pages:
        id
        titre
        slug
        texte
        tri
    
    Affichage de la list de toutes les pages -> menu
-->


<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">
    <div class=\"container\">
        <a class=\"navbar-brand\" href=\"/\">Vintage Sci-Fi - Les Créatures du Futur</a>
        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">
            <span class=\"navbar-toggler-icon\"></span>
        </button>
        
        <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">
            
            <ul class=\"navbar-nav ml-auto\" id=\"menu-header\">
                
                ";
        // line 25
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["pages"]) || array_key_exists("pages", $context) ? $context["pages"] : (function () { throw new RuntimeError('Variable "pages" does not exist.', 25, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["page"]) {
            // line 26
            echo "                    
                    <li class=\"nav-item ";
            // line 27
            if ((twig_get_attribute($this->env, $this->source, $context["page"], "id", []) == (isset($context["idPage"]) || array_key_exists("idPage", $context) ? $context["idPage"] : (function () { throw new RuntimeError('Variable "idPage" does not exist.', 27, $this->source); })()))) {
                echo " active ";
            } elseif ( !(isset($context["idPage"]) || array_key_exists("idPage", $context) ? $context["idPage"] : (function () { throw new RuntimeError('Variable "idPage" does not exist.', 27, $this->source); })())) {
                echo " active ";
            }
            echo " \">
                        <a class=\"nav-link\" href=\"";
            // line 28
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_pages_show", ["id" => twig_get_attribute($this->env, $this->source, $context["page"], "id", []), "slug" => twig_get_attribute($this->env, $this->source, $context["page"], "slug", [])]), "html", null, true);
            echo " \">
                            ";
            // line 29
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["page"], "titre", []), "html", null, true);
            echo "
                        </a>
                    </li>
                
                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['page'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 34
        echo "            
            </ul>
        
        </div>
    </div>
</nav>";
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    public function getTemplateName()
    {
        return "pages/index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  97 => 34,  86 => 29,  82 => 28,  74 => 27,  71 => 26,  67 => 25,  41 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("
<!--templates/pages/index.html.twig
    Entity Pages:
        id
        titre
        slug
        texte
        tri
    
    Affichage de la list de toutes les pages -> menu
-->


<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">
    <div class=\"container\">
        <a class=\"navbar-brand\" href=\"/\">Vintage Sci-Fi - Les Créatures du Futur</a>
        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">
            <span class=\"navbar-toggler-icon\"></span>
        </button>
        
        <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">
            
            <ul class=\"navbar-nav ml-auto\" id=\"menu-header\">
                
                {% for page in pages %}
                    
                    <li class=\"nav-item {% if page.id == idPage %} active {% elseif not idPage %} active {% endif %} \">
                        <a class=\"nav-link\" href=\"{{ path('app_pages_show', {id: page.id, slug: page.slug}) }} \">
                            {{ page.titre }}
                        </a>
                    </li>
                
                {% endfor %}
            
            </ul>
        
        </div>
    </div>
</nav>", "pages/index.html.twig", "C:\\wamp64\\www\\BESWEB_2_2018-2019\\Tsimpilova_SymfonyExam_2019\\templates\\pages\\index.html.twig");
    }
}
