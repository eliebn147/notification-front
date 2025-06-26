import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const preset = definePreset(Aura, {
  components: {
    button: {
      css: () => `
        .p-button-sm .p-button-icon {
          font-size: 0.675rem;
        }
        .p-button-sm {
        padding: 0.225rem 0.485rem;
        }
      `
    }
  }
});

export default preset;
