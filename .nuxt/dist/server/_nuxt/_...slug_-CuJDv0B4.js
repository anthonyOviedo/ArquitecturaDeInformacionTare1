import _sfc_main$1 from "./ContentRenderer-DOYBdGks.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-O3jhD0AG.js";
import { defineComponent, computed, withAsyncContext, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { u as useRoute, _ as _export_sfc } from "../server.mjs";
import { u as useAsyncData, q as queryContent } from "./query-B157ickb.js";
import "./ContentRendererMarkdown-Cr3LgzJu.js";
import "/home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/destr/dist/index.mjs";
import "/home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/scule/dist/index.mjs";
import "property-information";
import "./node-yHY0X6Y7.js";
import "./preview-C4ZME5h8.js";
import "/home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/h3/dist/index.mjs";
import "/home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/nuxt/node_modules/ohash/dist/index.mjs";
import "/home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/klona/dist/index.mjs";
import "/home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/ufo/dist/index.mjs";
import "/home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/hookable/dist/index.mjs";
import "/home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/unctx/dist/index.mjs";
import "vue-router";
import "/home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/radix3/dist/index.mjs";
import "/home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/defu/dist/defu.mjs";
import "/home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/perfect-debounce/dist/index.mjs";
import "/home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/ohash/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const path = computed(() => "/" + route.params.slug.join("/"));
    const { data: articulo } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `articulo-${path.value}`,
      () => queryContent().where({ _path: path.value }).findOne()
    )), __temp = await __temp, __restore(), __temp);
    const { data: surround } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(`surround-${path.value}`, () => {
      if (!articulo.value?.category) {
        return queryContent().only(["_path", "title"]).findSurround(path.value);
      }
      return queryContent().where({ category: articulo.value.category }).only(["_path", "title"]).findSurround(path.value);
    })), __temp = await __temp, __restore(), __temp);
    const anterior = computed(() => surround.value?.[0] || null);
    const siguiente = computed(() => surround.value?.[1] || null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentRenderer = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      if (unref(articulo)) {
        _push(`<article${ssrRenderAttrs(_attrs)} data-v-1f17e83b><header data-v-1f17e83b><p data-v-1f17e83b>${ssrInterpolate(unref(articulo).category)}</p><h1 data-v-1f17e83b>${ssrInterpolate(unref(articulo).title)}</h1><p data-v-1f17e83b> Por <strong data-v-1f17e83b>${ssrInterpolate(unref(articulo).author)}</strong> · ${ssrInterpolate(unref(articulo).date)}</p></header><section data-v-1f17e83b>`);
        if (unref(articulo).image) {
          _push(`<div data-v-1f17e83b><img${ssrRenderAttr("src", unref(articulo).image)}${ssrRenderAttr("alt", unref(articulo).title)} class="article-image" data-v-1f17e83b></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(articulo).description) {
          _push(`<p data-v-1f17e83b>${ssrInterpolate(unref(articulo).description)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_ContentRenderer, { value: unref(articulo) }, null, _parent));
        _push(`</section><nav data-v-1f17e83b><div data-v-1f17e83b>`);
        if (unref(anterior)) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(anterior)._path
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` ← ${ssrInterpolate(unref(anterior).title)}`);
              } else {
                return [
                  createTextVNode(" ← " + toDisplayString(unref(anterior).title), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div data-v-1f17e83b>`);
        if (unref(siguiente)) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(siguiente)._path
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(siguiente).title)} → `);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(siguiente).title) + " → ", 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></nav></article>`);
      } else {
        _push(`<p${ssrRenderAttrs(_attrs)} data-v-1f17e83b> La noticia que busca no existe o fue movida. </p>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1f17e83b"]]);
export {
  ____slug_ as default
};
//# sourceMappingURL=_...slug_-CuJDv0B4.js.map
