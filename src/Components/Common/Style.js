import { mobileBreakpoint, tabBreakpoint } from '../../../../bpl-tools/utils/data';
import { getBackgroundCSS, getBorderCSS, getBoxCSS, getMultiShadowCSS, getTypoCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const { styles = {}, alignment = 'center' } = attributes || {};

	const mainSl        = `#${id}`;
	const sectionSl     = `${mainSl} .tsb_tcge-team-section`;
	const wrapperSl     = `${sectionSl} .tsb_tcge-team-wrapper`;
	const cardSl        = `${wrapperSl} .tsb_tcge-member-card`;
	const imgBoxSl      = `${cardSl} .tsb_tcge-member-image`;
	const imgSl         = `${imgBoxSl} img`;
	const glassSl       = `${cardSl} .tsb_tcge-glass-overlay`;
	const nameSl        = `${glassSl} .tsb_tcge-name`;
	const designationSl = `${glassSl} .tsb_tcge-designation`;
	const bioSl         = `${glassSl} .tsb_tcge-bio`;
	const socialListSl  = `${glassSl} .tsb_tcge-social-links`;
	const socialLinkSl  = `${socialListSl} li a`;
	const buttonSl      = `${glassSl} .tsb_tcge-button`;

	const alignMap = { left: 'start', center: 'center', right: 'end' };
	const justify  = alignMap[alignment] || 'center';

	const cardShadow      = getMultiShadowCSS(styles?.card?.shadow);
	const cardHoverShadow = getMultiShadowCSS(styles?.card?.hoverShadow);

	return <style dangerouslySetInnerHTML={{
		__html: `

		${getTypoCSS('', styles?.name?.typo)?.googleFontLink || ''}
		${getTypoCSS('', styles?.designation?.typo)?.googleFontLink || ''}
		${getTypoCSS('', styles?.bio?.typo)?.googleFontLink || ''}
		${getTypoCSS('', styles?.button?.typo)?.googleFontLink || ''}

		${getTypoCSS(nameSl, styles?.name?.typo)?.styles || ''}
		${getTypoCSS(designationSl, styles?.designation?.typo)?.styles || ''}
		${getTypoCSS(bioSl, styles?.bio?.typo)?.styles || ''}
		${getTypoCSS(buttonSl, styles?.button?.typo)?.styles || ''}

		${sectionSl} {
			${getBackgroundCSS(styles?.bg)}
			padding: ${getBoxCSS(styles?.padding?.desktop)};
			margin: ${getBoxCSS(styles?.margin?.desktop)};
		}

		${wrapperSl} {
			grid-template-columns: repeat(${styles?.columns?.desktop || 3}, 1fr);
			column-gap: ${styles?.columnGap ?? 30}px;
			row-gap: ${styles?.rowGap ?? 30}px;
			justify-items: ${justify};
		}

		${cardSl} {
			${getBackgroundCSS(styles?.card?.bg)}
			width: 100%;
			max-width: ${styles?.card?.maxWidth?.desktop || '320px'};
			height: ${styles?.card?.height?.desktop || '400px'};
			border-radius: ${getBoxCSS(styles?.card?.radius)};
			${getBorderCSS(styles?.card?.border)}
			${cardShadow ? `box-shadow: ${cardShadow};` : ''}
		}

		${cardHoverShadow ? `${cardSl}:hover { box-shadow: ${cardHoverShadow}; }` : ''}

		${imgSl} {
			object-fit: ${styles?.image?.imageFit || 'cover'};
		}

		${cardSl}:hover .tsb_tcge-member-image {
			transform: scale(${styles?.image?.hoverScale || 1.08});
		}

		${glassSl} {
			${getBackgroundCSS(styles?.glass?.bg)}
			height: ${styles?.glass?.height || '180px'};
			padding: ${getBoxCSS(styles?.glass?.padding)};
			text-align: ${styles?.glass?.textAlign || 'center'};
			border: 1px solid ${styles?.glass?.borderColor || 'rgba(255,255,255,0.2)'};
			backdrop-filter: blur(${styles?.glass?.blur ?? 15}px);
			-webkit-backdrop-filter: blur(${styles?.glass?.blur ?? 15}px);
		}

		${nameSl} {
			color: ${styles?.name?.color || '#ffffff'};
			margin: ${getBoxCSS(styles?.name?.margin)};
		}

		${designationSl} {
			color: ${styles?.designation?.color || '#dddddd'};
			margin: ${getBoxCSS(styles?.designation?.margin)};
		}

		${bioSl} {
			color: ${styles?.bio?.color || '#cccccc'};
			margin: ${getBoxCSS(styles?.bio?.margin)};
		}

		${socialListSl} {
			gap: ${styles?.social?.gap ?? 12}px;
			margin: ${getBoxCSS(styles?.social?.margin)};
		}

		${socialLinkSl} {
			color: ${styles?.social?.iconColor || '#ffffff'};
			background-color: ${styles?.social?.iconBg || 'transparent'};
			width: ${styles?.social?.btnSize || '40px'};
			height: ${styles?.social?.btnSize || '40px'};
			border-radius: ${getBoxCSS(styles?.social?.btnRadius) || '50%'};
		}
		${socialLinkSl} svg {
			width: ${styles?.social?.iconSize || 20}px;
			height: ${styles?.social?.iconSize || 20}px;
		}

		${socialLinkSl}:hover {
			background-color: ${styles?.social?.iconHoverBg || 'rgba(255,255,255,0.2)'};
			color: ${styles?.social?.iconHoverColor || '#ffffff'};
		}
		${socialLinkSl}:hover svg {
			color: ${styles?.social?.iconHoverColor || '#ffffff'};
			fill: ${styles?.social?.iconHoverColor || '#ffffff'};
		}

		${buttonSl} {
			${getBackgroundCSS(styles?.button?.bg)}
			color: ${styles?.button?.color || '#1a1a1a'};
			padding: ${getBoxCSS(styles?.button?.padding)};
			border-radius: ${getBoxCSS(styles?.button?.radius)};
			margin: ${getBoxCSS(styles?.button?.margin)};
		}

		${buttonSl}:hover {
			${getBackgroundCSS(styles?.button?.hoverBg)}
			color: ${styles?.button?.hoverColor || '#ffffff'};
		}

		${tabBreakpoint} {
			${sectionSl} {
				padding: ${getBoxCSS(styles?.padding?.tablet)};
				margin: ${getBoxCSS(styles?.margin?.tablet)};
			}
			${wrapperSl} {
				grid-template-columns: repeat(${styles?.columns?.tablet || 2}, 1fr);
			}
			${cardSl} {
				max-width: ${styles?.card?.maxWidth?.tablet || '320px'};
				height: ${styles?.card?.height?.tablet || '400px'};
			}
		}

		${mobileBreakpoint} {
			${sectionSl} {
				padding: ${getBoxCSS(styles?.padding?.mobile)};
				margin: ${getBoxCSS(styles?.margin?.mobile)};
			}
			${wrapperSl} {
				grid-template-columns: repeat(${styles?.columns?.mobile || 1}, 1fr);
			}
			${cardSl} {
				max-width: ${styles?.card?.maxWidth?.mobile || '340px'};
				height: ${styles?.card?.height?.mobile || '420px'};
			}
		}

	`}} />;
};

export default Style;
