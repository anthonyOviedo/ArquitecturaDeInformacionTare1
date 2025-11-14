import { _ as __nuxt_component_0 } from "./nuxt-link-O3jhD0AG.js";
import { defineComponent, computed, withAsyncContext, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { u as useRoute } from "../server.mjs";
import { u as useAsyncData, q as queryContent } from "./query-B157ickb.js";
import "/home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/ufo/dist/index.mjs";
import "/home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/hookable/dist/index.mjs";
import "/home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/unctx/dist/index.mjs";
import "/home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/radix3/dist/index.mjs";
import "/home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/defu/dist/defu.mjs";
import "/home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/perfect-debounce/dist/index.mjs";
import "/home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/ohash/dist/index.mjs";
import "/home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/klona/dist/index.mjs";
import "./preview-C4ZME5h8.js";
import "/home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/destr/dist/index.mjs";
import "/home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/nuxt/node_modules/ohash/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[categoria]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const categoria = computed(() => route.params.categoria);
    const { data: articulos } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `categoria-${categoria.value}`,
      () => queryContent(categoria.value).sort({ date: -1 }).find()
    )), __temp = await __temp, __restore(), __temp);
    const nombreCategoria = computed(() => {
      switch (categoria.value) {
        case "sucesos":
          return "Sucesos";
        case "deportes":
          return "Deportes";
        case "espectaculos":
          return "Espectáculos";
        default:
          return categoria.value;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(_attrs)}><header><h1>${ssrInterpolate(unref(nombreCategoria))}</h1><p> Noticias de la categoría <strong>${ssrInterpolate(unref(nombreCategoria))}</strong>. Seleccione una nota para leerla completa. </p></header>`);
      if (unref(articulos)?.length) {
        _push(`<div><!--[-->`);
        ssrRenderList(unref(articulos), (articulo) => {
          _push(`<article><h2>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: articulo._path
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(articulo.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(articulo.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</h2><p>${ssrInterpolate(articulo.author)} · ${ssrInterpolate(articulo.date)}</p><p>${ssrInterpolate(articulo.description)}</p>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: articulo._path
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Leer noticia completa `);
              } else {
                return [
                  createTextVNode(" Leer noticia completa ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<hr></article>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<p> No se encontraron noticias para esta categoría. </p>`);
      }
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/categoria/[categoria].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_categoria_-k9BNkaiS.js.map
