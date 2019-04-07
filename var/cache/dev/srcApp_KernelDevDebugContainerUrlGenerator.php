<?php

use Symfony\Component\Routing\RequestContext;
use Symfony\Component\Routing\Exception\RouteNotFoundException;
use Psr\Log\LoggerInterface;

/**
 * This class has been auto-generated
 * by the Symfony Routing Component.
 */
class srcApp_KernelDevDebugContainerUrlGenerator extends Symfony\Component\Routing\Generator\UrlGenerator
{
    private static $declaredRoutes;
    private $defaultLocale;

    public function __construct(RequestContext $context, LoggerInterface $logger = null, string $defaultLocale = null)
    {
        $this->context = $context;
        $this->logger = $logger;
        $this->defaultLocale = $defaultLocale;
        if (null === self::$declaredRoutes) {
            self::$declaredRoutes = [
        '_twig_error_test' => [['code', '_format'], ['_controller' => 'twig.controller.preview_error::previewErrorPageAction', '_format' => 'html'], ['code' => '\\d+'], [['variable', '.', '[^/]++', '_format', true], ['variable', '/', '\\d+', 'code', true], ['text', '/_error']], [], []],
        '_wdt' => [['token'], ['_controller' => 'web_profiler.controller.profiler::toolbarAction'], [], [['variable', '/', '[^/]++', 'token', true], ['text', '/_wdt']], [], []],
        '_profiler_home' => [[], ['_controller' => 'web_profiler.controller.profiler::homeAction'], [], [['text', '/_profiler/']], [], []],
        '_profiler_search' => [[], ['_controller' => 'web_profiler.controller.profiler::searchAction'], [], [['text', '/_profiler/search']], [], []],
        '_profiler_search_bar' => [[], ['_controller' => 'web_profiler.controller.profiler::searchBarAction'], [], [['text', '/_profiler/search_bar']], [], []],
        '_profiler_phpinfo' => [[], ['_controller' => 'web_profiler.controller.profiler::phpinfoAction'], [], [['text', '/_profiler/phpinfo']], [], []],
        '_profiler_search_results' => [['token'], ['_controller' => 'web_profiler.controller.profiler::searchResultsAction'], [], [['text', '/search/results'], ['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], []],
        '_profiler_open_file' => [[], ['_controller' => 'web_profiler.controller.profiler::openAction'], [], [['text', '/_profiler/open']], [], []],
        '_profiler' => [['token'], ['_controller' => 'web_profiler.controller.profiler::panelAction'], [], [['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], []],
        '_profiler_router' => [['token'], ['_controller' => 'web_profiler.controller.router::panelAction'], [], [['text', '/router'], ['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], []],
        '_profiler_exception' => [['token'], ['_controller' => 'web_profiler.controller.exception::showAction'], [], [['text', '/exception'], ['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], []],
        '_profiler_exception_css' => [['token'], ['_controller' => 'web_profiler.controller.exception::cssAction'], [], [['text', '/exception.css'], ['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], []],
        'app_creatures_index' => [[], ['_controller' => 'App\\Controller\\CreaturesController::index'], [], [['text', '/creatures/']], [], []],
        'app_creatures_new' => [[], ['_controller' => 'App\\Controller\\CreaturesController::add'], [], [['text', '/creatures/add']], [], []],
        'app_creatures_show' => [['id', 'slug'], ['_controller' => 'App\\Controller\\CreaturesController::show'], ['id' => '\\d+', 'slug' => '[a-z][a-z0-9\\-]*'], [['variable', '/', '[a-z][a-z0-9\\-]*', 'slug', true], ['variable', '/', '\\d+', 'id', true], ['text', '/creatures']], [], []],
        'app_creatures_edit' => [['id', 'slug'], ['_controller' => 'App\\Controller\\CreaturesController::edit'], ['id' => '\\d+', 'slug' => '[a-z][a-z0-9\\-]*'], [['text', '/edit'], ['variable', '/', '[a-z][a-z0-9\\-]*', 'slug', true], ['variable', '/', '\\d+', 'id', true], ['text', '/creatures']], [], []],
        'app_creatures_delete' => [['id', 'slug'], ['_controller' => 'App\\Controller\\CreaturesController::delete'], ['id' => '\\d+', 'slug' => '[a-z][a-z0-9\\-]*'], [['text', '/delete'], ['variable', '/', '[a-z][a-z0-9\\-]*', 'slug', true], ['variable', '/', '\\d+', 'id', true], ['text', '/creatures']], [], []],
        'app_creatures_search' => [['search'], ['search' => null, '_controller' => 'App\\Controller\\CreaturesController::recherche'], [], [['variable', '/', '[^/]++', 'search', true], ['text', '/creatures/search']], [], []],
        'app_films_index' => [[], ['_controller' => 'App\\Controller\\FilmsController::index'], [], [['text', '/films/']], [], []],
        'app_films_show' => [['id', 'slug'], ['_controller' => 'App\\Controller\\FilmsController::show'], ['id' => '\\d+', 'slug' => '[a-z][a-z0-9\\-]*'], [['variable', '/', '[a-z][a-z0-9\\-]*', 'slug', true], ['variable', '/', '\\d+', 'id', true], ['text', '/films']], [], []],
        'app_pages_show' => [['id', 'slug'], ['_controller' => 'App\\Controller\\PagesController::show'], [], [['variable', '/', '[^/]++', 'slug', true], ['variable', '/', '[^/]++', 'id', true], ['text', '/pages']], [], []],
        'app_tags_index' => [[], ['_controller' => 'App\\Controller\\TagsController::index'], [], [['text', '/tags/']], [], []],
        'app_tags_show' => [['id', 'slug'], ['_controller' => 'App\\Controller\\TagsController::show'], ['id' => '\\d+', 'slug' => '[a-z][a-z0-9\\-]*'], [['variable', '/', '[a-z][a-z0-9\\-]*', 'slug', true], ['variable', '/', '\\d+', 'id', true], ['text', '/tags']], [], []],
        'index' => [[], ['id' => 1, '_controller' => 'App\\Controller\\PagesController::show'], [], [['text', '/']], [], []],
    ];
        }
    }

    public function generate($name, $parameters = [], $referenceType = self::ABSOLUTE_PATH)
    {
        $locale = $parameters['_locale']
            ?? $this->context->getParameter('_locale')
            ?: $this->defaultLocale;

        if (null !== $locale && null !== $name) {
            do {
                if ((self::$declaredRoutes[$name.'.'.$locale][1]['_canonical_route'] ?? null) === $name) {
                    unset($parameters['_locale']);
                    $name .= '.'.$locale;
                    break;
                }
            } while (false !== $locale = strstr($locale, '_', true));
        }

        if (!isset(self::$declaredRoutes[$name])) {
            throw new RouteNotFoundException(sprintf('Unable to generate a URL for the named route "%s" as such route does not exist.', $name));
        }

        list($variables, $defaults, $requirements, $tokens, $hostTokens, $requiredSchemes) = self::$declaredRoutes[$name];

        return $this->doGenerate($variables, $defaults, $requirements, $tokens, $parameters, $name, $referenceType, $hostTokens, $requiredSchemes);
    }
}
