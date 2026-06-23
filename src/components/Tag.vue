<script setup lang="ts">
import { computed } from "vue";
import { tagLabels, type TagVariant } from "./tagVariants";

const props = defineProps<{
  variant: TagVariant;
}>();

const classes = computed(() => ["tag", `tag-variant-${props.variant}`]);
</script>

<template>
  <div :class="classes">
    <p class="tag-copy">{{ tagLabels[props.variant] }}</p>
  </div>
</template>

<style scoped lang="scss">
.tag {
  border-radius: var(--radius-md);
  padding: calc(var(--space-xxs) - var(--stroke-md)) calc(var(--space-sm  ) - var(--stroke-md));
  border: var(--stroke-md) solid transparent;

  &-copy {
    font-size: var(--font-size-xs);
    font-weight: 700;
  }

  &-variant {
    &-three {
      background-color: #ed9c55;
      color: #492708;
    }

    &-react {
      background-color: #61dafb;
      color: #0f2e36;
    }

    &-websockets {
      background-color: #2674a4;
      color: white;
    }

    &-redis {
      background-color: #ce4036;
      color: white;
    }

    &-html {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }

    &-css {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }

    &-javascript {
      background-color: #ffdf4f;
      color: #362d03;
    }

    &-node {
      background-color: #237d23;
      color: white;
    }

    &-next {
      background-color: white;
      color: black;
    }

    &-kubernetes {
      background-color: #326ce5;
      color: white;
    }

    &-postgresql {
      background-color: #2f6c92;
      color: white;
    }

    &-ogl {
      background-color: #0e5495;
      color: white;
    }

    &-glsl {
      background-color: #95630e;
      color: white;
    }
&-wordpress {
  background-color: #21759b;
  color: white;
}

&-n8n {
  background-color: #ff6d5a;
  color: white;
}

&-openai {
  background-color: #10a37f;
  color: white;
}

&-seo {
  background-color: #4285f4;
  color: white;
}

&-pinterest {
  background-color: #e60023;
  color: white;
}

&-automation {
  background-color: #7c3aed;
  color: white;
}

&-docker {
  background-color: #2496ed;
  color: white;
}

&-vps {
  background-color: #374151;
  color: white;
}

&-cloudflare {
  background-color: #f38020;
  color: white;
}

&-caddy {
  background-color: #00c853;
  color: white;
}

&-html {
  background-color: #e34f26;
  color: white;
}

&-css {
  background-color: #1572b6;
  color: white;
}

&-javascript {
  background-color: #f7df1e;
  color: black;
}
&-claude {
  background-color: #d97706;
  color: white;
}
  }
}
</style>
