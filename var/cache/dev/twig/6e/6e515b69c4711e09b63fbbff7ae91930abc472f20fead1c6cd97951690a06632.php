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

/* creatures/show.html.twig */
class __TwigTemplate_0b6e85ca5502b84c32567aed91ec5daccb227c4a21bad91a0a8c9166090c99e2 extends \Twig\Template
{
    private $source;

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        // line 2
        $this->parent = $this->loadTemplate("base.html.twig", "creatures/show.html.twig", 2);
        $this->blocks = [
            'comments' => [$this, 'block_comments'],
            'title' => [$this, 'block_title'],
            'content1' => [$this, 'block_content1'],
        ];
    }

    protected function doGetParent(array $context)
    {
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "creatures/show.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "creatures/show.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 4
    public function block_comments($context, array $blocks = [])
    {
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "comments"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "comments"));

        // line 5
        echo "        <!--
    templates/creatures/show.html.twig
        Creatures:
            id
            nom
            texteLead
            texteSuite
            dateCreation
            image
            film
            slug
    
    -->
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 21
    public function block_title($context, array $blocks = [])
    {
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["creature"]) || array_key_exists("creature", $context) ? $context["creature"] : (function () { throw new RuntimeError('Variable "creature" does not exist.', 21, $this->source); })()), "nom", []), "html", null, true);
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 23
    public function block_content1($context, array $blocks = [])
    {
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "content1"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "content1"));

        // line 24
        echo "    
    <h1 class=\"mt-4\">";
        // line 25
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["creature"]) || array_key_exists("creature", $context) ? $context["creature"] : (function () { throw new RuntimeError('Variable "creature" does not exist.', 25, $this->source); })()), "nom", []), "html", null, true);
        echo "</h1>
    <p class=\"lead\">
        dans
        <a href=\"";
        // line 28
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_films_show", ["id" => twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["creature"]) || array_key_exists("creature", $context) ? $context["creature"] : (function () { throw new RuntimeError('Variable "creature" does not exist.', 28, $this->source); })()), "film", []), "id", []), "slug" => twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["creature"]) || array_key_exists("creature", $context) ? $context["creature"] : (function () { throw new RuntimeError('Variable "creature" does not exist.', 28, $this->source); })()), "film", []), "slug", [])]), "html", null, true);
        echo "\">";
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["creature"]) || array_key_exists("creature", $context) ? $context["creature"] : (function () { throw new RuntimeError('Variable "creature" does not exist.', 28, $this->source); })()), "film", []), "titre", []), "html", null, true);
        echo "</a> le ";
        echo twig_escape_filter($this->env, twig_date_format_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["creature"]) || array_key_exists("creature", $context) ? $context["creature"] : (function () { throw new RuntimeError('Variable "creature" does not exist.', 28, $this->source); })()), "dateCreation", []), "d-m-Y"), "html", null, true);
        echo "
    </p>
    
    <hr>
    
    
    <div class=\"row\">
        <div class=\"col-md-6\">
            <a href=\"";
        // line 36
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_creatures_show", ["id" => twig_get_attribute($this->env, $this->source, (isset($context["creature"]) || array_key_exists("creature", $context) ? $context["creature"] : (function () { throw new RuntimeError('Variable "creature" does not exist.', 36, $this->source); })()), "id", []), "slug" => twig_get_attribute($this->env, $this->source, (isset($context["creature"]) || array_key_exists("creature", $context) ? $context["creature"] : (function () { throw new RuntimeError('Variable "creature" does not exist.', 36, $this->source); })()), "slug", [])]), "html", null, true);
        echo "\">
                <img class=\"img-fluid rounded mb-3 mb-md-0\" src=\"";
        // line 37
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl(("build/assets/images/" . twig_get_attribute($this->env, $this->source, (isset($context["creature"]) || array_key_exists("creature", $context) ? $context["creature"] : (function () { throw new RuntimeError('Variable "creature" does not exist.', 37, $this->source); })()), "image", []))), "html", null, true);
        echo "\" alt=\"";
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["creature"]) || array_key_exists("creature", $context) ? $context["creature"] : (function () { throw new RuntimeError('Variable "creature" does not exist.', 37, $this->source); })()), "image", []), "html", null, true);
        echo "\">
            </a>
        </div>
        <div class=\"col-md-6\">
            <p class=\"lead\">";
        // line 41
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["creature"]) || array_key_exists("creature", $context) ? $context["creature"] : (function () { throw new RuntimeError('Variable "creature" does not exist.', 41, $this->source); })()), "texteLead", []), "html", null, true);
        echo "</p>
            <hr/>
            <p>";
        // line 43
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["creature"]) || array_key_exists("creature", $context) ? $context["creature"] : (function () { throw new RuntimeError('Variable "creature" does not exist.', 43, $this->source); })()), "texteSuite", []), "html", null, true);
        echo "</p>
            <div>
                <a class=\"btn btn-primary\" href=\"";
        // line 45
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_creatures_edit", ["id" => twig_get_attribute($this->env, $this->source, (isset($context["creature"]) || array_key_exists("creature", $context) ? $context["creature"] : (function () { throw new RuntimeError('Variable "creature" does not exist.', 45, $this->source); })()), "id", []), "slug" => twig_get_attribute($this->env, $this->source, (isset($context["creature"]) || array_key_exists("creature", $context) ? $context["creature"] : (function () { throw new RuntimeError('Variable "creature" does not exist.', 45, $this->source); })()), "slug", [])]), "html", null, true);
        echo "\">Modifier</a>
                ";
        // line 46
        echo twig_include($this->env, $context, "creatures/_delete_form.html.twig");
        echo "
            </div>
            <hr/>
            <ul class=\"list-inline tags\">
                ";
        // line 50
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, (isset($context["creature"]) || array_key_exists("creature", $context) ? $context["creature"] : (function () { throw new RuntimeError('Variable "creature" does not exist.', 50, $this->source); })()), "tags", []));
        foreach ($context['_seq'] as $context["_key"] => $context["tag"]) {
            // line 51
            echo "                    <li>
                        <a href=\"";
            // line 52
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_tags_show", ["id" => twig_get_attribute($this->env, $this->source, $context["tag"], "id", []), "slug" => twig_get_attribute($this->env, $this->source, $context["tag"], "slug", [])]), "html", null, true);
            echo "\" class=\"btn btn-default btn-xs\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["tag"], "nom", []), "html", null, true);
            echo "</a>
                    </li>
                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['tag'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 55
        echo "            </ul>
        </div>
    </div>
    <!-- /.row -->
    <hr>
    
    
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "creatures/show.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  193 => 55,  182 => 52,  179 => 51,  175 => 50,  168 => 46,  164 => 45,  159 => 43,  154 => 41,  145 => 37,  141 => 36,  126 => 28,  120 => 25,  117 => 24,  108 => 23,  90 => 21,  67 => 5,  58 => 4,  27 => 2,);
    }

    public function getSourceContext()
    {
        return new Source("
{% extends 'base.html.twig' %}

{% block comments %}
        <!--
    templates/creatures/show.html.twig
        Creatures:
            id
            nom
            texteLead
            texteSuite
            dateCreation
            image
            film
            slug
    
    -->
{% endblock %}


{% block title %}{{ creature.nom }}{% endblock %}

{% block content1 %}
    
    <h1 class=\"mt-4\">{{ creature.nom }}</h1>
    <p class=\"lead\">
        dans
        <a href=\"{{ path('app_films_show',{'id':creature.film.id,'slug':creature.film.slug}) }}\">{{ creature.film.titre }}</a> le {{ creature.dateCreation | date('d-m-Y') }}
    </p>
    
    <hr>
    
    
    <div class=\"row\">
        <div class=\"col-md-6\">
            <a href=\"{{ path('app_creatures_show', {'id': creature.id, 'slug': creature.slug}) }}\">
                <img class=\"img-fluid rounded mb-3 mb-md-0\" src=\"{{ asset('build/assets/images/'~creature.image) }}\" alt=\"{{ creature.image }}\">
            </a>
        </div>
        <div class=\"col-md-6\">
            <p class=\"lead\">{{ creature.texteLead }}</p>
            <hr/>
            <p>{{ creature.texteSuite }}</p>
            <div>
                <a class=\"btn btn-primary\" href=\"{{ path('app_creatures_edit', {'id': creature.id, 'slug': creature.slug}) }}\">Modifier</a>
                {{ include('creatures/_delete_form.html.twig') }}
            </div>
            <hr/>
            <ul class=\"list-inline tags\">
                {% for tag in creature.tags %}
                    <li>
                        <a href=\"{{ path('app_tags_show', {'id': tag.id, 'slug': tag.slug}) }}\" class=\"btn btn-default btn-xs\">{{ tag.nom }}</a>
                    </li>
                {% endfor %}
            </ul>
        </div>
    </div>
    <!-- /.row -->
    <hr>
    
    
{% endblock %}
", "creatures/show.html.twig", "C:\\wamp64\\www\\BESWEB_2_2018-2019\\Tsimpilova_SymfonyExam_2019\\templates\\creatures\\show.html.twig");
    }
}
