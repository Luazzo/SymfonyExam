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

/* creatures/search.html.twig */
class __TwigTemplate_001bede367be7529ce8b5807d07177668f83d076d358f3423e4989239b368054 extends \Twig\Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "creatures/search.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "creatures/search.html.twig"));

        // line 1
        echo "
<!--
    ./templates/creatures/search.html.twig
    Affichage d'un form pour la recherche des Creatures
-->

<div class=\"card my-4\">
    <h5 class=\"card-header\">Rechercher une créature</h5>
    <div class=\"card-body\">
        <form class=\"input-group\" action=\"";
        // line 10
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_creatures_search");
        echo "\" method=\"GET\">
            <input type=\"text\" class=\"form-control\" name=\"search\">
            <span class=\"input-group-btn\">
                <input class=\"btn btn-secondary\" type=\"submit\" value=\"Go!\">
            </span>
        </form>
    </div>
</div>";
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    public function getTemplateName()
    {
        return "creatures/search.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  52 => 10,  41 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("
<!--
    ./templates/creatures/search.html.twig
    Affichage d'un form pour la recherche des Creatures
-->

<div class=\"card my-4\">
    <h5 class=\"card-header\">Rechercher une créature</h5>
    <div class=\"card-body\">
        <form class=\"input-group\" action=\"{{ path('app_creatures_search') }}\" method=\"GET\">
            <input type=\"text\" class=\"form-control\" name=\"search\">
            <span class=\"input-group-btn\">
                <input class=\"btn btn-secondary\" type=\"submit\" value=\"Go!\">
            </span>
        </form>
    </div>
</div>", "creatures/search.html.twig", "C:\\wamp64\\www\\BESWEB_2_2018-2019\\Tsimpilova_SymfonyExam_2019\\templates\\creatures\\search.html.twig");
    }
}
