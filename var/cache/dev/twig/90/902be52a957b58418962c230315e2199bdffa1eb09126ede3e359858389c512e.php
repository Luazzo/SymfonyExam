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

/* creatures/_form.html.twig */
class __TwigTemplate_12fa1a01f960d81f8dc5fce321d92bd04215a12f6f82bce65eb6aaa99a76d497 extends \Twig\Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "creatures/_form.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "creatures/_form.html.twig"));

        // line 1
        echo "
<!--
    ./templates/creatures/_form.html.twig
    Affichage d'un form pour creation ou modification d'une Creature
-->

";
        // line 7
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 7, $this->source); })()), 'form_start');
        echo "
    
    
    <div class=\"form-group\">
        ";
        // line 11
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 11, $this->source); })()), "nom", []), 'widget');
        echo "
    </div>
    <div class=\"form-group\">
        ";
        // line 14
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 14, $this->source); })()), "textelead", []), 'widget');
        echo "
    </div>
    <div class=\"form-group\">
        ";
        // line 17
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 17, $this->source); })()), "textesuite", []), 'widget');
        echo "
    </div>
    <div class=\"form-group\">
        ";
        // line 20
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 20, $this->source); })()), "image", []), 'widget');
        echo "
    </div>
    <div class=\"form-group\">
        ";
        // line 23
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 23, $this->source); })()), "film", []), 'widget');
        echo "
    </div>

\t<div class=\"checkboxes check-tags\" >
\t\t";
        // line 27
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 27, $this->source); })()), "tags", []));
        foreach ($context['_seq'] as $context["_key"] => $context["tag"]) {
            // line 28
            echo "\t\t\t<div>
\t\t\t\t";
            // line 29
            echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock($context["tag"], 'widget');
            echo "
\t\t\t\t<span>";
            // line 30
            echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock($context["tag"], 'label');
            echo "</span>
\t\t\t\t<span>";
            // line 31
            echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock($context["tag"], 'errors');
            echo "</span>
\t\t\t</div>
\t\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['tag'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 34
        echo "\t</div>
<hr/>

\t<div class=\"form-group\">
\t\t<button class=\"btn btn-success\">";
        // line 38
        echo twig_escape_filter($this->env, (isset($context["submit"]) || array_key_exists("submit", $context) ? $context["submit"] : (function () { throw new RuntimeError('Variable "submit" does not exist.', 38, $this->source); })()), "html", null, true);
        echo "</button>
\t</div>

    
";
        // line 42
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 42, $this->source); })()), 'form_end');
        echo "


";
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    public function getTemplateName()
    {
        return "creatures/_form.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  124 => 42,  117 => 38,  111 => 34,  102 => 31,  98 => 30,  94 => 29,  91 => 28,  87 => 27,  80 => 23,  74 => 20,  68 => 17,  62 => 14,  56 => 11,  49 => 7,  41 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("
<!--
    ./templates/creatures/_form.html.twig
    Affichage d'un form pour creation ou modification d'une Creature
-->

{{ form_start(form) }}
    
    
    <div class=\"form-group\">
        {{ form_widget(form.nom) }}
    </div>
    <div class=\"form-group\">
        {{ form_widget(form.textelead) }}
    </div>
    <div class=\"form-group\">
        {{ form_widget(form.textesuite) }}
    </div>
    <div class=\"form-group\">
        {{ form_widget(form.image) }}
    </div>
    <div class=\"form-group\">
        {{ form_widget(form.film) }}
    </div>

\t<div class=\"checkboxes check-tags\" >
\t\t{% for tag in form.tags %}
\t\t\t<div>
\t\t\t\t{{ form_widget(tag) }}
\t\t\t\t<span>{{ form_label(tag) }}</span>
\t\t\t\t<span>{{ form_errors(tag) }}</span>
\t\t\t</div>
\t\t{% endfor %}
\t</div>
<hr/>

\t<div class=\"form-group\">
\t\t<button class=\"btn btn-success\">{{ submit }}</button>
\t</div>

    
{{ form_end(form) }}


", "creatures/_form.html.twig", "C:\\wamp64\\www\\BESWEB_2_2018-2019\\Tsimpilova_SymfonyExam_2019\\templates\\creatures\\_form.html.twig");
    }
}
