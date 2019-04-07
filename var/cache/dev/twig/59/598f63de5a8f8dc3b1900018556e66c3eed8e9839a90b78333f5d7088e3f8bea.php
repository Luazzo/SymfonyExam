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

/* creatures/index.html.twig */
class __TwigTemplate_a42666e345023037e504848955cb39848cc8a890647848b0250c6b126f0994bf extends \Twig\Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "creatures/index.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "creatures/index.html.twig"));

        // line 1
        echo "<!--
\t./templates/creatures/index.php
\t\tList des Creatures
 -->


";
        // line 7
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["creatures"]) || array_key_exists("creatures", $context) ? $context["creatures"] : (function () { throw new RuntimeError('Variable "creatures" does not exist.', 7, $this->source); })()));
        $context['loop'] = [
          'parent' => $context['_parent'],
          'index0' => 0,
          'index'  => 1,
          'first'  => true,
        ];
        if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
            $length = count($context['_seq']);
            $context['loop']['revindex0'] = $length - 1;
            $context['loop']['revindex'] = $length;
            $context['loop']['length'] = $length;
            $context['loop']['last'] = 1 === $length;
        }
        foreach ($context['_seq'] as $context["_key"] => $context["creature"]) {
            // line 8
            echo "\t
\t
\t<div class=\"row\">
\t\t<div class=\"col-md-4\">
\t\t\t<a href=\"";
            // line 12
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_creatures_show", ["id" => twig_get_attribute($this->env, $this->source, $context["creature"], "id", []), "slug" => twig_get_attribute($this->env, $this->source, $context["creature"], "slug", [])]), "html", null, true);
            echo "\">
\t\t\t\t<img class=\"img-fluid rounded mb-3 mb-md-0\" src=\"";
            // line 13
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl(("build/assets/images/" . twig_get_attribute($this->env, $this->source, $context["creature"], "image", []))), "html", null, true);
            echo "\" alt=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["creature"], "slug", []), "html", null, true);
            echo "\">
\t\t\t</a>
\t\t</div>
\t\t<div class=\"col-md-8\">
\t\t\t<h3>";
            // line 17
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["creature"], "nom", []), "html", null, true);
            echo "</h3>
\t\t\t<p class=\"lead\">
\t\t\t\tdans
\t\t\t\t<a href=\"";
            // line 20
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_films_show", ["id" => twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["creature"], "film", []), "id", []), "slug" => twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["creature"], "film", []), "slug", [])]), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["creature"], "film", []), "titre", []), "html", null, true);
            echo "</a> le ";
            echo twig_escape_filter($this->env, twig_date_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["creature"], "dateCreation", []), "d-m-Y"), "html", null, true);
            echo "
\t\t\t</p>
\t\t\t<p>";
            // line 22
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["creature"], "texteLead", []), "html", null, true);
            echo "</p>
\t\t\t<a class=\"btn btn-primary\" href=\"";
            // line 23
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_creatures_show", ["id" => twig_get_attribute($this->env, $this->source, $context["creature"], "id", []), "slug" => twig_get_attribute($this->env, $this->source, $context["creature"], "slug", [])]), "html", null, true);
            echo "\">Voir la créature</a>
\t\t\t<a class=\"btn btn-success\" href=\"";
            // line 24
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_creatures_edit", ["id" => twig_get_attribute($this->env, $this->source, $context["creature"], "id", []), "slug" => twig_get_attribute($this->env, $this->source, $context["creature"], "slug", [])]), "html", null, true);
            echo "\">Modifier</a>
            ";
            // line 25
            echo twig_include($this->env, $context, "creatures/_delete_form.html.twig");
            echo "
\t\t\t<hr/>
\t\t\t<ul class=\"list-inline tags\">
\t\t\t\t
\t\t\t\t";
            // line 29
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, $context["creature"], "tags", []));
            foreach ($context['_seq'] as $context["_key"] => $context["tag"]) {
                // line 30
                echo "\t\t\t\t\t<li>
\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-default btn-xs\">";
                // line 31
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["tag"], "nom", []), "html", null, true);
                echo "</a>
\t\t\t\t\t</li>
\t\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['tag'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 34
            echo "\t\t\t
\t\t\t</ul>
\t\t</div>
\t</div>
\t
\t<hr>

";
            ++$context['loop']['index0'];
            ++$context['loop']['index'];
            $context['loop']['first'] = false;
            if (isset($context['loop']['length'])) {
                --$context['loop']['revindex0'];
                --$context['loop']['revindex'];
                $context['loop']['last'] = 0 === $context['loop']['revindex0'];
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['creature'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    public function getTemplateName()
    {
        return "creatures/index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  135 => 34,  126 => 31,  123 => 30,  119 => 29,  112 => 25,  108 => 24,  104 => 23,  100 => 22,  91 => 20,  85 => 17,  76 => 13,  72 => 12,  66 => 8,  49 => 7,  41 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<!--
\t./templates/creatures/index.php
\t\tList des Creatures
 -->


{% for creature in creatures %}
\t
\t
\t<div class=\"row\">
\t\t<div class=\"col-md-4\">
\t\t\t<a href=\"{{ path('app_creatures_show',{'id':creature.id,'slug':creature.slug}) }}\">
\t\t\t\t<img class=\"img-fluid rounded mb-3 mb-md-0\" src=\"{{ asset('build/assets/images/'~creature.image) }}\" alt=\"{{ creature.slug }}\">
\t\t\t</a>
\t\t</div>
\t\t<div class=\"col-md-8\">
\t\t\t<h3>{{ creature.nom }}</h3>
\t\t\t<p class=\"lead\">
\t\t\t\tdans
\t\t\t\t<a href=\"{{ path('app_films_show',{'id':creature.film.id,'slug':creature.film.slug}) }}\">{{ creature.film.titre }}</a> le {{ creature.dateCreation | date('d-m-Y') }}
\t\t\t</p>
\t\t\t<p>{{ creature.texteLead }}</p>
\t\t\t<a class=\"btn btn-primary\" href=\"{{ path('app_creatures_show', {'id': creature.id, 'slug': creature.slug}) }}\">Voir la créature</a>
\t\t\t<a class=\"btn btn-success\" href=\"{{ path('app_creatures_edit', {'id': creature.id, 'slug': creature.slug}) }}\">Modifier</a>
            {{ include('creatures/_delete_form.html.twig') }}
\t\t\t<hr/>
\t\t\t<ul class=\"list-inline tags\">
\t\t\t\t
\t\t\t\t{% for tag in creature.tags %}
\t\t\t\t\t<li>
\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-default btn-xs\">{{ tag.nom }}</a>
\t\t\t\t\t</li>
\t\t\t\t{% endfor %}
\t\t\t
\t\t\t</ul>
\t\t</div>
\t</div>
\t
\t<hr>

{% endfor %}", "creatures/index.html.twig", "C:\\wamp64\\www\\BESWEB_2_2018-2019\\Tsimpilova_SymfonyExam_2019\\templates\\creatures\\index.html.twig");
    }
}
