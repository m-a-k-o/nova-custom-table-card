<?php

namespace Mako\CustomTableCard;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Events\ServingNova;
use Laravel\Nova\Nova;

class CardServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->publishConfig();

        $this->app->booted(function () {
            $this->routes();
        });

        Nova::serving(function (ServingNova $event) {
            Nova::script('nova-custom-table-card', __DIR__.'/../dist/js/card.js');
            //Nova::style('nova-custom-table-card', __DIR__.'/../dist/css/card.css');
        });
    }

    /**
	 * Publish config file.
	 *
	 * @param void
	 * @return  void
	 */
	protected function publishConfig()
	{
		$configPath = __DIR__ . '/config/custom-table-card.php';

		$this->publishes([$configPath => config_path('custom-table-card.php')], 'custom-table-card');
	}

    /**
     * Register the card's routes.
     *
     * @return void
     */
    protected function routes()
    {
        if ($this->app->routesAreCached()) {
            return;
        }

        Route::middleware(['nova'])
                ->prefix('nova-vendor/nova-custom-table-card')
                ->namespace(config('custom-table-card.namespace'))
                ->group(__DIR__.'/../routes/api.php');
    }

    /**
	 * Register any application services.
	 *
	 * @return void
	 */
	public function register()
	{
		$this->mergeConfigFrom(
			__DIR__ . '/config/custom-table-card.php',
			'custom-table-card'
		);
	}
}
