<?php

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.
// Returns the private '.service_locator.03Y_XGM' shared service.

return $this->privates['.service_locator.03Y_XGM'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($this->getService, [
    'factory' => ['privates', '.errored..service_locator.03Y_XGM.Symfony\\Component\\Form\\FormFactory', NULL, 'Cannot autowire service ".service_locator.03Y_XGM": it references class "Symfony\\Component\\Form\\FormFactory" but no such service exists. Try changing the type-hint to "Symfony\\Component\\Form\\FormFactoryInterface" instead.'],
]);
