<?php

namespace Cookiez\Modules\Banner\Components;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use Cookiez\Classes\Utils;
use Cookiez\Modules\Settings\Classes\Settings;

class Wp_Consent_Api {

	private const CONSENT_CATEGORY_MAP = [
		'functional'  => 'functional',
		'analytics'   => 'statistics',
		'advertising' => 'marketing',
	];

	public function __construct() {
		$plugin = COOKIEZ_PLUGIN_BASE;
		add_filter( "wp_consent_api_registered_{$plugin}", '__return_true' );
		add_filter( 'wp_get_consent_type', [ self::class, 'get_consent_type' ] );
		add_action( 'wp_head', [ self::class, 'output_initial_consent_script' ], 2 );
	}

	public static function get_consent_type(): string {
		$settings     = Settings::get( Settings::COOKIEZ_SETTINGS );
		$template_type = $settings['templateType'] ?? 'opt-in';

		return 'opt-out' === $template_type ? 'optout' : 'optin';
	}

	public static function output_initial_consent_script(): void {
		$settings = Settings::get( Settings::COOKIEZ_SETTINGS );

		if ( empty( $settings['supportGcm'] ) ) {
			return;
		}

		$consent_type   = self::get_consent_type();
		$stored_consent = Utils::parse_consent_cookie();

		$lines = [
			'window.wp_consent_type = ' . wp_json_encode( $consent_type ) . ';',
			"document.dispatchEvent(new CustomEvent('wp_consent_type_defined'));",
		];

		if ( is_array( $stored_consent ) ) {
			foreach ( self::CONSENT_CATEGORY_MAP as $cookiez_category => $wp_category ) {
				$status  = ! empty( $stored_consent[ $cookiez_category ] ) ? 'allow' : 'deny';
				$lines[] = 'wp_set_consent(' . wp_json_encode( $wp_category ) . ',' . wp_json_encode( $status ) . ');';
			}
		}

		wp_print_inline_script_tag( implode( "\n", $lines ) );
	}
}
