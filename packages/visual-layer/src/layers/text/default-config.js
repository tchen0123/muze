import { CLASSPREFIX } from '../../enums/constants';

export const defaultConfig = {
    defClassName: 'layer-text',
    classPrefix: CLASSPREFIX,
    className: '',
    transform: {
        type: 'identity'
    },
    interaction: {
        highlight: [{
            type: 'fill',
            intensity: [0, -10, -10, 0]
        }],
        fade: [{
            type: 'fill',
            intensity: [0, -30, +30, 0]
        }],
        focus: [{
            type: 'fill',
            intensity: [0, -30, +30, 0]
        }]
    },
    transition: {
        effect: 'cubic',
        duration: 1000
    },
    encoding: {
        color: {},
        text: {
            value: ''
        },
        background: {
            padding: 10,
            enabled: false
        }
    },
    states: {
        highlight: {
            className: `${CLASSPREFIX}-layer-text-highlight`
        },
        fadeout: {
            className: `${CLASSPREFIX}-layer-text-fadeout`
        },
        selected: {
            className: `${CLASSPREFIX}-layer-text-selected`
        }
    }
};
