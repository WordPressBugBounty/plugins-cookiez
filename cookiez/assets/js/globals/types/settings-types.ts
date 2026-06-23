import TemplateType from '@cookiez/globals/enums/template-type';
import type OnboardingStep from '@cookiez/globals/enums/onboarding-step';

export { TemplateType };

export type GeoTargeting = 'worldwide';

export type IntegrationsState = {
	wpConsentApiActive: boolean;
	siteKitActive: boolean;
	siteKitConsentMode: boolean;
	delegateGcmToSiteKit: boolean;
	wpConsentApiInstallUrl: string;
	wpConsentApiLearnMoreUrl: string;
};

export type SettingsState = {
	bannerDisplayStatus: boolean;
	disableBannerPages: string[];
	templateType: TemplateType;
	geoTargeting: GeoTargeting;
	consentExpiration: number;
	gpcDntSupport: boolean;
	supportGcm: boolean;
	googleTagsBeforeConsent: boolean;
	isOnboardingCompleted: boolean;
	onboardingCurrentStep: OnboardingStep;
	designBannerInfotipDismissed: boolean;
	integrations?: IntegrationsState;
	isMigrationPopupDismissed: boolean;
};
