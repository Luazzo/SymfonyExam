<?php

use Symfony\Component\Routing\Matcher\Dumper\PhpMatcherTrait;
use Symfony\Component\Routing\RequestContext;

/**
 * This class has been auto-generated
 * by the Symfony Routing Component.
 */
class srcApp_KernelDevDebugContainerUrlMatcher extends Symfony\Bundle\FrameworkBundle\Routing\RedirectableUrlMatcher
{
    use PhpMatcherTrait;

    public function __construct(RequestContext $context)
    {
        $this->context = $context;
        $this->staticRoutes = [
            '/_profiler' => [[['_route' => '_profiler_home', '_controller' => 'web_profiler.controller.profiler::homeAction'], null, null, null, true, false, null]],
            '/_profiler/search' => [[['_route' => '_profiler_search', '_controller' => 'web_profiler.controller.profiler::searchAction'], null, null, null, false, false, null]],
            '/_profiler/search_bar' => [[['_route' => '_profiler_search_bar', '_controller' => 'web_profiler.controller.profiler::searchBarAction'], null, null, null, false, false, null]],
            '/_profiler/phpinfo' => [[['_route' => '_profiler_phpinfo', '_controller' => 'web_profiler.controller.profiler::phpinfoAction'], null, null, null, false, false, null]],
            '/_profiler/open' => [[['_route' => '_profiler_open_file', '_controller' => 'web_profiler.controller.profiler::openAction'], null, null, null, false, false, null]],
            '/creatures' => [[['_route' => 'app_creatures_index', '_controller' => 'App\\Controller\\CreaturesController::index'], null, ['GET' => 0], null, true, false, null]],
            '/creatures/add' => [[['_route' => 'app_creatures_new', '_controller' => 'App\\Controller\\CreaturesController::add'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
            '/films' => [[['_route' => 'app_films_index', '_controller' => 'App\\Controller\\FilmsController::index'], null, ['GET' => 0], null, true, false, null]],
            '/tags' => [[['_route' => 'app_tags_index', '_controller' => 'App\\Controller\\TagsController::index'], null, ['GET' => 0], null, true, false, null]],
            '/' => [[['_route' => 'index', 'id' => 1, '_controller' => 'App\\Controller\\PagesController::show'], null, null, null, false, false, null]],
        ];
        $this->regexpList = [
            0 => '{^(?'
                    .'|/_(?'
                        .'|error/(\\d+)(?:\\.([^/]++))?(*:38)'
                        .'|wdt/([^/]++)(*:57)'
                        .'|profiler/([^/]++)(?'
                            .'|/(?'
                                .'|search/results(*:102)'
                                .'|router(*:116)'
                                .'|exception(?'
                                    .'|(*:136)'
                                    .'|\\.css(*:149)'
                                .')'
                            .')'
                            .'|(*:159)'
                        .')'
                    .')'
                    .'|/creatures/(?'
                        .'|(\\d+)/([a-z][a-z0-9\\-]*)(*:207)'
                        .'|(\\d+)/([a-z][a-z0-9\\-]*)/edit(*:244)'
                        .'|(\\d+)/([a-z][a-z0-9\\-]*)/delete(*:283)'
                        .'|search(?:/([^/]++))?(*:311)'
                    .')'
                    .'|/films/(\\d+)/([a-z][a-z0-9\\-]*)(*:351)'
                    .'|/pages/([^/]++)/([^/]++)(*:383)'
                    .'|/tags/(\\d+)/([a-z][a-z0-9\\-]*)(*:421)'
                .')/?$}sDu',
        ];
        $this->dynamicRoutes = [
            38 => [[['_route' => '_twig_error_test', '_controller' => 'twig.controller.preview_error::previewErrorPageAction', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
            57 => [[['_route' => '_wdt', '_controller' => 'web_profiler.controller.profiler::toolbarAction'], ['token'], null, null, false, true, null]],
            102 => [[['_route' => '_profiler_search_results', '_controller' => 'web_profiler.controller.profiler::searchResultsAction'], ['token'], null, null, false, false, null]],
            116 => [[['_route' => '_profiler_router', '_controller' => 'web_profiler.controller.router::panelAction'], ['token'], null, null, false, false, null]],
            136 => [[['_route' => '_profiler_exception', '_controller' => 'web_profiler.controller.exception::showAction'], ['token'], null, null, false, false, null]],
            149 => [[['_route' => '_profiler_exception_css', '_controller' => 'web_profiler.controller.exception::cssAction'], ['token'], null, null, false, false, null]],
            159 => [[['_route' => '_profiler', '_controller' => 'web_profiler.controller.profiler::panelAction'], ['token'], null, null, false, true, null]],
            207 => [[['_route' => 'app_creatures_show', '_controller' => 'App\\Controller\\CreaturesController::show'], ['id', 'slug'], ['GET' => 0], null, false, true, null]],
            244 => [[['_route' => 'app_creatures_edit', '_controller' => 'App\\Controller\\CreaturesController::edit'], ['id', 'slug'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
            283 => [[['_route' => 'app_creatures_delete', '_controller' => 'App\\Controller\\CreaturesController::delete'], ['id', 'slug'], ['DELETE' => 0], null, false, false, null]],
            311 => [[['_route' => 'app_creatures_search', 'search' => null, '_controller' => 'App\\Controller\\CreaturesController::recherche'], ['search'], ['GET' => 0], null, false, true, null]],
            351 => [[['_route' => 'app_films_show', '_controller' => 'App\\Controller\\FilmsController::show'], ['id', 'slug'], ['GET' => 0], null, false, true, null]],
            383 => [[['_route' => 'app_pages_show', '_controller' => 'App\\Controller\\PagesController::show'], ['id', 'slug'], ['GET' => 0], null, false, true, null]],
            421 => [[['_route' => 'app_tags_show', '_controller' => 'App\\Controller\\TagsController::show'], ['id', 'slug'], ['GET' => 0], null, false, true, null]],
        ];
    }
}
