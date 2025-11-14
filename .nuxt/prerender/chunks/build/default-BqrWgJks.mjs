import { _ as __nuxt_component_0 } from './nuxt-link-O3jhD0AG.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'file:///home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'file:///home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/ufo/dist/index.mjs';
import 'file:///home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/h3/dist/index.mjs';
import 'file:///home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/unified/index.js';
import 'file:///home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/remark-parse/index.js';
import 'file:///home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/remark-rehype/index.js';
import 'file:///home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/remark-mdc/dist/index.mjs';
import 'file:///home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/defu/dist/defu.mjs';
import 'file:///home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/remark-gfm/index.js';
import 'file:///home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/rehype-external-links/index.js';
import 'file:///home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/rehype-sort-attributes/index.js';
import 'file:///home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/rehype-raw/index.js';
import 'file:///home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/detab/index.js';
import 'file:///home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/scule/dist/index.mjs';
import 'file:///home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/hast-util-to-string/index.js';
import 'file:///home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/github-slugger/index.js';
import 'file:///home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/destr/dist/index.mjs';
import 'file:///home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/hookable/dist/index.mjs';
import 'file:///home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/node-mock-http/dist/index.mjs';
import 'file:///home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/unstorage/dist/index.mjs';
import 'file:///home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/nitropack/node_modules/ohash/dist/index.mjs';
import 'file:///home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/klona/dist/index.mjs';
import 'file:///home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/unctx/dist/index.mjs';
import 'file:///home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/pathe/dist/index.mjs';
import 'file:///home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/vue-router/vue-router.node.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><header><nav>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Blog de Noticias`);
      } else {
        return [
          createTextVNode("Blog de Noticias")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` | `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/categoria/sucesos" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Sucesos`);
      } else {
        return [
          createTextVNode("Sucesos")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` | `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/categoria/deportes" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Deportes`);
      } else {
        return [
          createTextVNode("Deportes")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` | `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/categoria/espectaculos" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Espect\xE1culos`);
      } else {
        return [
          createTextVNode("Espect\xE1culos")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</nav></header><main>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main><footer><p>Arquitectura de la Informaci\xF3n - Tarea 1</p><p>Desarrollado con Nuxt 3 y @nuxt/content</p></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-BqrWgJks.mjs.map
