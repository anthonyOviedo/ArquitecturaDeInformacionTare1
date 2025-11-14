import { _ as __nuxt_component_0 } from "./nuxt-link-O3jhD0AG.js";
import { defineComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "/home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "/home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/hookable/dist/index.mjs";
import "/home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/unctx/dist/index.mjs";
import "/home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/radix3/dist/index.mjs";
import "/home/tony/proyectos/tarea1/ArquitecturaDeInformacionTare1/node_modules/defu/dist/defu.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const categorias = [
      {
        id: "sucesos",
        nombre: "Sucesos",
        descripcion: "Cobertura de emergencias, incidentes relevantes y acontecimientos que afectan la vida cotidiana en el país."
      },
      {
        id: "deportes",
        nombre: "Deportes",
        descripcion: "Resultados, análisis y contexto de las principales competencias deportivas a nivel nacional e internacional."
      },
      {
        id: "espectaculos",
        nombre: "Espectáculos",
        descripcion: "Noticias sobre cine, música, teatro y el día a día de las figuras del entretenimiento."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(_attrs)}><header><h1>Blog de noticias nacionales</h1><p> Este blog reúne noticias nacionales organizadas en tres categorías principales: sucesos, deportes y espectáculos. Cada nota incluye su autor, fecha de publicación y al menos una fotografía relacionada. </p></header><section><h2>Categorías de noticias</h2><ul><!--[-->`);
      ssrRenderList(categorias, (categoria) => {
        _push(`<li><h3>${ssrInterpolate(categoria.nombre)}</h3><p>${ssrInterpolate(categoria.descripcion)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/categoria/${categoria.id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Ver noticias`);
            } else {
              return [
                createTextVNode("Ver noticias")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></section></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-D0P-I5VU.js.map
