import {
  Fragment,
  Teleport,
  cloneVNode,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  h,
  inject,
  nextTick,
  normalizeClass,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  openBlock,
  popScopeId,
  provide,
  pushScopeId,
  reactive,
  ref,
  renderList,
  shallowRef,
  toDisplayString,
  toRaw,
  unref,
  vShow,
  watch,
  watchEffect,
  withCtx,
  withDirectives,
  withKeys
} from "./chunk-G3CMYKT2.js";

// node_modules/@documate/vue/dist/documate.js
function U(t, e, ...n) {
  if (t in e) {
    let r = e[t];
    return typeof r == "function" ? r(...n) : r;
  }
  let o = new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map((r) => `"${r}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(o, U), o;
}
var _e = ((t) => (t[t.None = 0] = "None", t[t.RenderStrategy = 1] = "RenderStrategy", t[t.Static = 2] = "Static", t))(_e || {});
var be = ((t) => (t[t.Unmount = 0] = "Unmount", t[t.Hidden = 1] = "Hidden", t))(be || {});
function H({ visible: t = true, features: e = 0, ourProps: n, theirProps: o, ...r }) {
  var s;
  let i = Yn(o, n), c = Object.assign(r, { props: i });
  if (t || e & 2 && i.static)
    return bt(c);
  if (e & 1) {
    let l = (s = i.unmount) == null || s ? 0 : 1;
    return U(l, { 0() {
      return null;
    }, 1() {
      return bt({ ...r, props: { ...i, hidden: true, style: { display: "none" } } });
    } });
  }
  return bt(c);
}
function bt({ props: t, attrs: e, slots: n, slot: o, name: r }) {
  var s, i;
  let { as: c, ...l } = ct(t, ["unmount", "static"]), a = (s = n.default) == null ? void 0 : s.call(n, o), u = {};
  if (o) {
    let p = false, f = [];
    for (let [d, v] of Object.entries(o))
      typeof v == "boolean" && (p = true), v === true && f.push(d);
    p && (u["data-headlessui-state"] = f.join(" "));
  }
  if (c === "template") {
    if (a = Kn(a ?? []), Object.keys(l).length > 0 || Object.keys(e).length > 0) {
      let [p, ...f] = a ?? [];
      if (!rr(p) || f.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${r} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(e)).map((g) => g.trim()).filter((g, k, h10) => h10.indexOf(g) === k).sort((g, k) => g.localeCompare(k)).map((g) => `  - ${g}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((g) => `  - ${g}`).join(`
`)].join(`
`));
      let d = Yn((i = p.props) != null ? i : {}, l), v = cloneVNode(p, d);
      for (let g in d)
        g.startsWith("on") && (v.props || (v.props = {}), v.props[g] = d[g]);
      return v;
    }
    return Array.isArray(a) && a.length === 1 ? a[0] : a;
  }
  return h(c, Object.assign({}, l, u), { default: () => a });
}
function Kn(t) {
  return t.flatMap((e) => e.type === Fragment ? Kn(e.children) : [e]);
}
function Yn(...t) {
  if (t.length === 0)
    return {};
  if (t.length === 1)
    return t[0];
  let e = {}, n = {};
  for (let o of t)
    for (let r in o)
      r.startsWith("on") && typeof o[r] == "function" ? (n[r] != null || (n[r] = []), n[r].push(o[r])) : e[r] = o[r];
  if (e.disabled || e["aria-disabled"])
    return Object.assign(e, Object.fromEntries(Object.keys(n).map((o) => [o, void 0])));
  for (let o in n)
    Object.assign(e, { [o](r, ...s) {
      let i = n[o];
      for (let c of i) {
        if (r instanceof Event && r.defaultPrevented)
          return;
        c(r, ...s);
      }
    } });
  return e;
}
function or(t) {
  let e = Object.assign({}, t);
  for (let n in e)
    e[n] === void 0 && delete e[n];
  return e;
}
function ct(t, e = []) {
  let n = Object.assign({}, t);
  for (let o of e)
    o in n && delete n[o];
  return n;
}
function rr(t) {
  return t == null ? false : typeof t.type == "string" || typeof t.type == "object" || typeof t.type == "function";
}
var sr = 0;
function cr() {
  return ++sr;
}
function te() {
  return cr();
}
var J = ((t) => (t.Space = " ", t.Enter = "Enter", t.Escape = "Escape", t.Backspace = "Backspace", t.Delete = "Delete", t.ArrowLeft = "ArrowLeft", t.ArrowUp = "ArrowUp", t.ArrowRight = "ArrowRight", t.ArrowDown = "ArrowDown", t.Home = "Home", t.End = "End", t.PageUp = "PageUp", t.PageDown = "PageDown", t.Tab = "Tab", t))(J || {});
function ir(t) {
  throw new Error("Unexpected object: " + t);
}
var G = ((t) => (t[t.First = 0] = "First", t[t.Previous = 1] = "Previous", t[t.Next = 2] = "Next", t[t.Last = 3] = "Last", t[t.Specific = 4] = "Specific", t[t.Nothing = 5] = "Nothing", t))(G || {});
function lr(t, e) {
  let n = e.resolveItems();
  if (n.length <= 0)
    return null;
  let o = e.resolveActiveIndex(), r = o ?? -1, s = (() => {
    switch (t.focus) {
      case 0:
        return n.findIndex((i) => !e.resolveDisabled(i));
      case 1: {
        let i = n.slice().reverse().findIndex((c, l, a) => r !== -1 && a.length - l - 1 >= r ? false : !e.resolveDisabled(c));
        return i === -1 ? i : n.length - 1 - i;
      }
      case 2:
        return n.findIndex((i, c) => c <= r ? false : !e.resolveDisabled(i));
      case 3: {
        let i = n.slice().reverse().findIndex((c) => !e.resolveDisabled(c));
        return i === -1 ? i : n.length - 1 - i;
      }
      case 4:
        return n.findIndex((i) => e.resolveId(i) === t.id);
      case 5:
        return null;
      default:
        ir(t);
    }
  })();
  return s === -1 ? o : s;
}
function R(t) {
  var e;
  return t == null || t.value == null ? null : (e = t.value.$el) != null ? e : t.value;
}
var Qn = Symbol("Context");
var Z = ((t) => (t[t.Open = 1] = "Open", t[t.Closed = 2] = "Closed", t[t.Closing = 4] = "Closing", t[t.Opening = 8] = "Opening", t))(Z || {});
function ar() {
  return it() !== null;
}
function it() {
  return inject(Qn, null);
}
function Xn(t) {
  provide(Qn, t);
}
function ln(t, e) {
  if (t)
    return t;
  let n = e ?? "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function ur(t, e) {
  let n = ref(ln(t.value.type, t.value.as));
  return onMounted(() => {
    n.value = ln(t.value.type, t.value.as);
  }), watchEffect(() => {
    var o;
    n.value || R(e) && R(e) instanceof HTMLButtonElement && !((o = R(e)) != null && o.hasAttribute("type")) && (n.value = "button");
  }), n;
}
var pr = Object.defineProperty;
var fr = (t, e, n) => e in t ? pr(t, e, { enumerable: true, configurable: true, writable: true, value: n }) : t[e] = n;
var an = (t, e, n) => (fr(t, typeof e != "symbol" ? e + "" : e, n), n);
var dr = class {
  constructor() {
    an(this, "current", this.detect()), an(this, "currentId", 0);
  }
  set(e) {
    this.current !== e && (this.currentId = 0, this.current = e);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
};
var He = new dr();
function ke(t) {
  if (He.isServer)
    return null;
  if (t instanceof Node)
    return t.ownerDocument;
  if (t != null && t.hasOwnProperty("value")) {
    let e = R(t);
    if (e)
      return e.ownerDocument;
  }
  return document;
}
function hr({ container: t, accept: e, walk: n, enabled: o }) {
  watchEffect(() => {
    let r = t.value;
    if (!r || o !== void 0 && !o.value)
      return;
    let s = ke(t);
    if (!s)
      return;
    let i = Object.assign((l) => e(l), { acceptNode: e }), c = s.createTreeWalker(r, NodeFilter.SHOW_ELEMENT, i, false);
    for (; c.nextNode(); )
      n(c.currentNode);
  });
}
var Pt = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((t) => `${t}:not([tabindex='-1'])`).join(",");
var ge = ((t) => (t[t.First = 1] = "First", t[t.Previous = 2] = "Previous", t[t.Next = 4] = "Next", t[t.Last = 8] = "Last", t[t.WrapAround = 16] = "WrapAround", t[t.NoScroll = 32] = "NoScroll", t))(ge || {});
var eo = ((t) => (t[t.Error = 0] = "Error", t[t.Overflow = 1] = "Overflow", t[t.Success = 2] = "Success", t[t.Underflow = 3] = "Underflow", t))(eo || {});
var mr = ((t) => (t[t.Previous = -1] = "Previous", t[t.Next = 1] = "Next", t))(mr || {});
function vr(t = document.body) {
  return t == null ? [] : Array.from(t.querySelectorAll(Pt)).sort((e, n) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var to = ((t) => (t[t.Strict = 0] = "Strict", t[t.Loose = 1] = "Loose", t))(to || {});
function gr(t, e = 0) {
  var n;
  return t === ((n = ke(t)) == null ? void 0 : n.body) ? false : U(e, { 0() {
    return t.matches(Pt);
  }, 1() {
    let o = t;
    for (; o !== null; ) {
      if (o.matches(Pt))
        return true;
      o = o.parentElement;
    }
    return false;
  } });
}
var br = ((t) => (t[t.Keyboard = 0] = "Keyboard", t[t.Mouse = 1] = "Mouse", t))(br || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (t) => {
  t.metaKey || t.altKey || t.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (t) => {
  t.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : t.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function Se(t) {
  t == null || t.focus({ preventScroll: true });
}
var Cr = ["textarea", "input"].join(",");
function _r(t) {
  var e, n;
  return (n = (e = t == null ? void 0 : t.matches) == null ? void 0 : e.call(t, Cr)) != null ? n : false;
}
function no(t, e = (n) => n) {
  return t.slice().sort((n, o) => {
    let r = e(n), s = e(o);
    if (r === null || s === null)
      return 0;
    let i = r.compareDocumentPosition(s);
    return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function nt(t, e, { sorted: n = true, relativeTo: o = null, skipElements: r = [] } = {}) {
  var s;
  let i = (s = Array.isArray(t) ? t.length > 0 ? t[0].ownerDocument : document : t == null ? void 0 : t.ownerDocument) != null ? s : document, c = Array.isArray(t) ? n ? no(t) : t : vr(t);
  r.length > 0 && c.length > 1 && (c = c.filter((v) => !r.includes(v))), o = o ?? i.activeElement;
  let l = (() => {
    if (e & 5)
      return 1;
    if (e & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), a = (() => {
    if (e & 1)
      return 0;
    if (e & 2)
      return Math.max(0, c.indexOf(o)) - 1;
    if (e & 4)
      return Math.max(0, c.indexOf(o)) + 1;
    if (e & 8)
      return c.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = e & 32 ? { preventScroll: true } : {}, p = 0, f = c.length, d;
  do {
    if (p >= f || p + f <= 0)
      return 0;
    let v = a + p;
    if (e & 16)
      v = (v + f) % f;
    else {
      if (v < 0)
        return 3;
      if (v >= f)
        return 1;
    }
    d = c[v], d == null || d.focus(u), p += l;
  } while (d !== i.activeElement);
  return e & 6 && _r(d) && d.select(), 2;
}
function Ke(t, e, n) {
  He.isServer || watchEffect((o) => {
    document.addEventListener(t, e, n), o(() => document.removeEventListener(t, e, n));
  });
}
function oo(t, e, n) {
  He.isServer || watchEffect((o) => {
    window.addEventListener(t, e, n), o(() => window.removeEventListener(t, e, n));
  });
}
function ro(t, e, n = computed(() => true)) {
  function o(s, i) {
    if (!n.value || s.defaultPrevented)
      return;
    let c = i(s);
    if (c === null || !c.getRootNode().contains(c))
      return;
    let l = function a(u) {
      return typeof u == "function" ? a(u()) : Array.isArray(u) || u instanceof Set ? u : [u];
    }(t);
    for (let a of l) {
      if (a === null)
        continue;
      let u = a instanceof HTMLElement ? a : R(a);
      if (u != null && u.contains(c) || s.composed && s.composedPath().includes(u))
        return;
    }
    return !gr(c, to.Loose) && c.tabIndex !== -1 && s.preventDefault(), e(s, c);
  }
  let r = ref(null);
  Ke("pointerdown", (s) => {
    var i, c;
    n.value && (r.value = ((c = (i = s.composedPath) == null ? void 0 : i.call(s)) == null ? void 0 : c[0]) || s.target);
  }, true), Ke("mousedown", (s) => {
    var i, c;
    n.value && (r.value = ((c = (i = s.composedPath) == null ? void 0 : i.call(s)) == null ? void 0 : c[0]) || s.target);
  }, true), Ke("click", (s) => {
    r.value && (o(s, () => r.value), r.value = null);
  }, true), Ke("touchend", (s) => o(s, () => s.target instanceof HTMLElement ? s.target : null), true), oo("blur", (s) => o(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}
var je = ((t) => (t[t.None = 1] = "None", t[t.Focusable = 2] = "Focusable", t[t.Hidden = 4] = "Hidden", t))(je || {});
var ot = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(t, { slots: e, attrs: n }) {
  return () => {
    let { features: o, ...r } = t, s = { "aria-hidden": (o & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(o & 4) === 4 && (o & 2) !== 2 && { display: "none" } } };
    return H({ ourProps: s, theirProps: r, slot: {}, attrs: n, slots: e, name: "Hidden" });
  };
} });
function so(t = {}, e = null, n = []) {
  for (let [o, r] of Object.entries(t))
    io(n, co(e, o), r);
  return n;
}
function co(t, e) {
  return t ? t + "[" + e + "]" : e;
}
function io(t, e, n) {
  if (Array.isArray(n))
    for (let [o, r] of n.entries())
      io(t, co(e, o.toString()), r);
  else
    n instanceof Date ? t.push([e, n.toISOString()]) : typeof n == "boolean" ? t.push([e, n ? "1" : "0"]) : typeof n == "string" ? t.push([e, n]) : typeof n == "number" ? t.push([e, `${n}`]) : n == null ? t.push([e, ""]) : so(n, e, t);
}
function kr(t, e, n) {
  let o = ref(n == null ? void 0 : n.value), r = computed(() => t.value !== void 0);
  return [computed(() => r.value ? t.value : o.value), function(s) {
    return r.value || (o.value = s), e == null ? void 0 : e(s);
  }];
}
function un(t) {
  return [t.screenX, t.screenY];
}
function xr() {
  let t = ref([-1, -1]);
  return { wasMoved(e) {
    let n = un(e);
    return t.value[0] === n[0] && t.value[1] === n[1] ? false : (t.value = n, true);
  }, update(e) {
    t.value = un(e);
  } };
}
function lo() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function yr() {
  return /Android/gi.test(window.navigator.userAgent);
}
function wr() {
  return lo() || yr();
}
function Ht(t) {
  typeof queueMicrotask == "function" ? queueMicrotask(t) : Promise.resolve().then(t).catch((e) => setTimeout(() => {
    throw e;
  }));
}
function Re() {
  let t = [], e = { addEventListener(n, o, r, s) {
    return n.addEventListener(o, r, s), e.add(() => n.removeEventListener(o, r, s));
  }, requestAnimationFrame(...n) {
    let o = requestAnimationFrame(...n);
    e.add(() => cancelAnimationFrame(o));
  }, nextFrame(...n) {
    e.requestAnimationFrame(() => {
      e.requestAnimationFrame(...n);
    });
  }, setTimeout(...n) {
    let o = setTimeout(...n);
    e.add(() => clearTimeout(o));
  }, microTask(...n) {
    let o = { current: true };
    return Ht(() => {
      o.current && n[0]();
    }), e.add(() => {
      o.current = false;
    });
  }, style(n, o, r) {
    let s = n.style.getPropertyValue(o);
    return Object.assign(n.style, { [o]: r }), this.add(() => {
      Object.assign(n.style, { [o]: s });
    });
  }, group(n) {
    let o = Re();
    return n(o), this.add(() => o.dispose());
  }, add(n) {
    return t.push(n), () => {
      let o = t.indexOf(n);
      if (o >= 0)
        for (let r of t.splice(o, 1))
          r();
    };
  }, dispose() {
    for (let n of t.splice(0))
      n();
  } };
  return e;
}
function Ar(t, e) {
  return t === e;
}
var Er = ((t) => (t[t.Open = 0] = "Open", t[t.Closed = 1] = "Closed", t))(Er || {});
var Dr = ((t) => (t[t.Single = 0] = "Single", t[t.Multi = 1] = "Multi", t))(Dr || {});
var Sr = ((t) => (t[t.Pointer = 0] = "Pointer", t[t.Other = 1] = "Other", t))(Sr || {});
var ao = Symbol("ComboboxContext");
function Oe(t) {
  let e = inject(ao, null);
  if (e === null) {
    let n = new Error(`<${t} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Oe), n;
  }
  return e;
}
var qr = defineComponent({ name: "Combobox", emits: { "update:modelValue": (t) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => Ar }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, nullable: { type: Boolean, default: false }, multiple: { type: [Boolean], default: false } }, inheritAttrs: false, setup(t, { slots: e, attrs: n, emit: o }) {
  let r = ref(1), s = ref(null), i = ref(null), c = ref(null), l = ref(null), a = ref({ static: false, hold: false }), u = ref([]), p = ref(null), f = ref(1), d = ref(false);
  function v(S = (x) => x) {
    let x = p.value !== null ? u.value[p.value] : null, A = no(S(u.value.slice()), (F) => R(F.dataRef.domRef)), D = x ? A.indexOf(x) : null;
    return D === -1 && (D = null), { options: A, activeOptionIndex: D };
  }
  let g = computed(() => t.multiple ? 1 : 0), k = computed(() => t.nullable), [h10, m] = kr(computed(() => t.modelValue), (S) => o("update:modelValue", S), computed(() => t.defaultValue)), C = computed(() => h10.value === void 0 ? U(g.value, { 1: [], 0: void 0 }) : h10.value), y = null, w = null, b = { comboboxState: r, value: C, mode: g, compare(S, x) {
    if (typeof t.by == "string") {
      let A = t.by;
      return (S == null ? void 0 : S[A]) === (x == null ? void 0 : x[A]);
    }
    return t.by(S, x);
  }, defaultValue: computed(() => t.defaultValue), nullable: k, inputRef: i, labelRef: s, buttonRef: c, optionsRef: l, disabled: computed(() => t.disabled), options: u, change(S) {
    m(S);
  }, activeOptionIndex: computed(() => {
    if (d.value && p.value === null && u.value.length > 0) {
      let S = u.value.findIndex((x) => !x.dataRef.disabled);
      S !== -1 && (p.value = S);
    }
    return p.value;
  }), activationTrigger: f, optionsPropsRef: a, closeCombobox() {
    d.value = false, !t.disabled && r.value !== 1 && (r.value = 1, p.value = null);
  }, openCombobox() {
    if (d.value = true, t.disabled || r.value === 0)
      return;
    let S = u.value.findIndex((x) => {
      let A = toRaw(x.dataRef.value);
      return U(g.value, { 0: () => b.compare(toRaw(b.value.value), toRaw(A)), 1: () => toRaw(b.value.value).some((D) => b.compare(toRaw(D), toRaw(A))) });
    });
    S !== -1 && (p.value = S), r.value = 0;
  }, goToOption(S, x, A) {
    d.value = false, y !== null && cancelAnimationFrame(y), y = requestAnimationFrame(() => {
      if (t.disabled || l.value && !a.value.static && r.value === 1)
        return;
      let D = v();
      if (D.activeOptionIndex === null) {
        let _ = D.options.findIndex((O) => !O.dataRef.disabled);
        _ !== -1 && (D.activeOptionIndex = _);
      }
      let F = lr(S === G.Specific ? { focus: G.Specific, id: x } : { focus: S }, { resolveItems: () => D.options, resolveActiveIndex: () => D.activeOptionIndex, resolveId: (_) => _.id, resolveDisabled: (_) => _.dataRef.disabled });
      p.value = F, f.value = A ?? 1, u.value = D.options;
    });
  }, selectOption(S) {
    let x = u.value.find((D) => D.id === S);
    if (!x)
      return;
    let { dataRef: A } = x;
    m(U(g.value, { 0: () => A.value, 1: () => {
      let D = toRaw(b.value.value).slice(), F = toRaw(A.value), _ = D.findIndex((O) => b.compare(F, toRaw(O)));
      return _ === -1 ? D.push(F) : D.splice(_, 1), D;
    } }));
  }, selectActiveOption() {
    if (b.activeOptionIndex.value === null)
      return;
    let { dataRef: S, id: x } = u.value[b.activeOptionIndex.value];
    m(U(g.value, { 0: () => S.value, 1: () => {
      let A = toRaw(b.value.value).slice(), D = toRaw(S.value), F = A.findIndex((_) => b.compare(D, toRaw(_)));
      return F === -1 ? A.push(D) : A.splice(F, 1), A;
    } })), b.goToOption(G.Specific, x);
  }, registerOption(S, x) {
    w && cancelAnimationFrame(w);
    let A = { id: S, dataRef: x }, D = v((F) => (F.push(A), F));
    if (p.value === null) {
      let F = x.value.value;
      U(g.value, { 0: () => b.compare(toRaw(b.value.value), toRaw(F)), 1: () => toRaw(b.value.value).some((_) => b.compare(toRaw(_), toRaw(F))) }) && (D.activeOptionIndex = D.options.indexOf(A));
    }
    u.value = D.options, p.value = D.activeOptionIndex, f.value = 1, D.options.some((F) => !R(F.dataRef.domRef)) && (w = requestAnimationFrame(() => {
      let F = v();
      u.value = F.options, p.value = F.activeOptionIndex;
    }));
  }, unregisterOption(S) {
    var x;
    b.activeOptionIndex.value !== null && ((x = b.options.value[b.activeOptionIndex.value]) == null ? void 0 : x.id) === S && (d.value = true);
    let A = v((D) => {
      let F = D.findIndex((_) => _.id === S);
      return F !== -1 && D.splice(F, 1), D;
    });
    u.value = A.options, p.value = A.activeOptionIndex, f.value = 1;
  } };
  ro([i, c, l], () => b.closeCombobox(), computed(() => r.value === 0)), provide(ao, b), Xn(computed(() => U(r.value, { 0: Z.Open, 1: Z.Closed })));
  let T = computed(() => b.activeOptionIndex.value === null ? null : u.value[b.activeOptionIndex.value].dataRef.value), I = computed(() => {
    var S;
    return (S = R(i)) == null ? void 0 : S.closest("form");
  });
  return onMounted(() => {
    watch([I], () => {
      if (!I.value || t.defaultValue === void 0)
        return;
      function S() {
        b.change(t.defaultValue);
      }
      return I.value.addEventListener("reset", S), () => {
        var x;
        (x = I.value) == null || x.removeEventListener("reset", S);
      };
    }, { immediate: true });
  }), () => {
    let { name: S, disabled: x, form: A, ...D } = t, F = { open: r.value === 0, disabled: x, activeIndex: b.activeOptionIndex.value, activeOption: T.value, value: C.value };
    return h(Fragment, [...S != null && C.value != null ? so({ [S]: C.value }).map(([_, O]) => h(ot, or({ features: je.Hidden, key: _, as: "input", type: "hidden", hidden: true, readOnly: true, form: A, name: _, value: O }))) : [], H({ theirProps: { ...n, ...ct(D, ["modelValue", "defaultValue", "nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: F, slots: e, attrs: n, name: "Combobox" })]);
  };
} });
defineComponent({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${te()}` } }, setup(t, { attrs: e, slots: n }) {
  let o = Oe("ComboboxLabel");
  function r() {
    var s;
    (s = R(o.inputRef)) == null || s.focus({ preventScroll: true });
  }
  return () => {
    let s = { open: o.comboboxState.value === 0, disabled: o.disabled.value }, { id: i, ...c } = t, l = { id: i, ref: o.labelRef, onClick: r };
    return H({ ourProps: l, theirProps: c, slot: s, attrs: e, slots: n, name: "ComboboxLabel" });
  };
} });
defineComponent({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${te()}` } }, setup(t, { attrs: e, slots: n, expose: o }) {
  let r = Oe("ComboboxButton");
  o({ el: r.buttonRef, $el: r.buttonRef });
  function s(l) {
    r.disabled.value || (r.comboboxState.value === 0 ? r.closeCombobox() : (l.preventDefault(), r.openCombobox()), nextTick(() => {
      var a;
      return (a = R(r.inputRef)) == null ? void 0 : a.focus({ preventScroll: true });
    }));
  }
  function i(l) {
    switch (l.key) {
      case J.ArrowDown:
        l.preventDefault(), l.stopPropagation(), r.comboboxState.value === 1 && r.openCombobox(), nextTick(() => {
          var a;
          return (a = r.inputRef.value) == null ? void 0 : a.focus({ preventScroll: true });
        });
        return;
      case J.ArrowUp:
        l.preventDefault(), l.stopPropagation(), r.comboboxState.value === 1 && (r.openCombobox(), nextTick(() => {
          r.value.value || r.goToOption(G.Last);
        })), nextTick(() => {
          var a;
          return (a = r.inputRef.value) == null ? void 0 : a.focus({ preventScroll: true });
        });
        return;
      case J.Escape:
        if (r.comboboxState.value !== 0)
          return;
        l.preventDefault(), r.optionsRef.value && !r.optionsPropsRef.value.static && l.stopPropagation(), r.closeCombobox(), nextTick(() => {
          var a;
          return (a = r.inputRef.value) == null ? void 0 : a.focus({ preventScroll: true });
        });
        return;
    }
  }
  let c = ur(computed(() => ({ as: t.as, type: e.type })), r.buttonRef);
  return () => {
    var l, a;
    let u = { open: r.comboboxState.value === 0, disabled: r.disabled.value, value: r.value.value }, { id: p, ...f } = t, d = { ref: r.buttonRef, id: p, type: c.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (l = R(r.optionsRef)) == null ? void 0 : l.id, "aria-expanded": r.comboboxState.value === 0, "aria-labelledby": r.labelRef.value ? [(a = R(r.labelRef)) == null ? void 0 : a.id, p].join(" ") : void 0, disabled: r.disabled.value === true ? true : void 0, onKeydown: i, onClick: s };
    return H({ ourProps: d, theirProps: f, slot: u, attrs: e, slots: n, name: "ComboboxButton" });
  };
} });
var Tr = defineComponent({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${te()}` } }, emits: { change: (t) => true }, setup(t, { emit: e, attrs: n, slots: o, expose: r }) {
  let s = Oe("ComboboxInput"), i = computed(() => ke(R(s.inputRef))), c = { value: false };
  r({ el: s.inputRef, $el: s.inputRef });
  function l() {
    s.change(null);
    let h10 = R(s.optionsRef);
    h10 && (h10.scrollTop = 0), s.goToOption(G.Nothing);
  }
  let a = computed(() => {
    var h10;
    let m = s.value.value;
    return R(s.inputRef) ? typeof t.displayValue < "u" && m !== void 0 ? (h10 = t.displayValue(m)) != null ? h10 : "" : typeof m == "string" ? m : "" : "";
  });
  onMounted(() => {
    watch([a, s.comboboxState, i], ([h10, m], [C, y]) => {
      if (c.value)
        return;
      let w = R(s.inputRef);
      w && ((y === 0 && m === 1 || h10 !== C) && (w.value = h10), requestAnimationFrame(() => {
        var b;
        if (c.value || !w || ((b = i.value) == null ? void 0 : b.activeElement) !== w)
          return;
        let { selectionStart: T, selectionEnd: I } = w;
        Math.abs((I ?? 0) - (T ?? 0)) === 0 && T === 0 && w.setSelectionRange(w.value.length, w.value.length);
      }));
    }, { immediate: true }), watch([s.comboboxState], ([h10], [m]) => {
      if (h10 === 0 && m === 1) {
        if (c.value)
          return;
        let C = R(s.inputRef);
        if (!C)
          return;
        let y = C.value, { selectionStart: w, selectionEnd: b, selectionDirection: T } = C;
        C.value = "", C.value = y, T !== null ? C.setSelectionRange(w, b, T) : C.setSelectionRange(w, b);
      }
    });
  });
  let u = ref(false);
  function p() {
    u.value = true;
  }
  function f() {
    Re().nextFrame(() => {
      u.value = false;
    });
  }
  function d(h10) {
    switch (c.value = true, h10.key) {
      case J.Enter:
        if (c.value = false, s.comboboxState.value !== 0 || u.value)
          return;
        if (h10.preventDefault(), h10.stopPropagation(), s.activeOptionIndex.value === null) {
          s.closeCombobox();
          return;
        }
        s.selectActiveOption(), s.mode.value === 0 && s.closeCombobox();
        break;
      case J.ArrowDown:
        return c.value = false, h10.preventDefault(), h10.stopPropagation(), U(s.comboboxState.value, { 0: () => s.goToOption(G.Next), 1: () => s.openCombobox() });
      case J.ArrowUp:
        return c.value = false, h10.preventDefault(), h10.stopPropagation(), U(s.comboboxState.value, { 0: () => s.goToOption(G.Previous), 1: () => {
          s.openCombobox(), nextTick(() => {
            s.value.value || s.goToOption(G.Last);
          });
        } });
      case J.Home:
        if (h10.shiftKey)
          break;
        return c.value = false, h10.preventDefault(), h10.stopPropagation(), s.goToOption(G.First);
      case J.PageUp:
        return c.value = false, h10.preventDefault(), h10.stopPropagation(), s.goToOption(G.First);
      case J.End:
        if (h10.shiftKey)
          break;
        return c.value = false, h10.preventDefault(), h10.stopPropagation(), s.goToOption(G.Last);
      case J.PageDown:
        return c.value = false, h10.preventDefault(), h10.stopPropagation(), s.goToOption(G.Last);
      case J.Escape:
        if (c.value = false, s.comboboxState.value !== 0)
          return;
        h10.preventDefault(), s.optionsRef.value && !s.optionsPropsRef.value.static && h10.stopPropagation(), s.nullable.value && s.mode.value === 0 && s.value.value === null && l(), s.closeCombobox();
        break;
      case J.Tab:
        if (c.value = false, s.comboboxState.value !== 0)
          return;
        s.mode.value === 0 && s.selectActiveOption(), s.closeCombobox();
        break;
    }
  }
  function v(h10) {
    e("change", h10), s.nullable.value && s.mode.value === 0 && h10.target.value === "" && l(), s.openCombobox();
  }
  function g() {
    c.value = false;
  }
  let k = computed(() => {
    var h10, m, C, y;
    return (y = (C = (m = t.defaultValue) != null ? m : s.defaultValue.value !== void 0 ? (h10 = t.displayValue) == null ? void 0 : h10.call(t, s.defaultValue.value) : null) != null ? C : s.defaultValue.value) != null ? y : "";
  });
  return () => {
    var h10, m, C, y, w, b;
    let T = { open: s.comboboxState.value === 0 }, { id: I, displayValue: S, onChange: x, ...A } = t, D = { "aria-controls": (h10 = s.optionsRef.value) == null ? void 0 : h10.id, "aria-expanded": s.comboboxState.value === 0, "aria-activedescendant": s.activeOptionIndex.value === null || (m = s.options.value[s.activeOptionIndex.value]) == null ? void 0 : m.id, "aria-labelledby": (w = (C = R(s.labelRef)) == null ? void 0 : C.id) != null ? w : (y = R(s.buttonRef)) == null ? void 0 : y.id, "aria-autocomplete": "list", id: I, onCompositionstart: p, onCompositionend: f, onKeydown: d, onInput: v, onBlur: g, role: "combobox", type: (b = n.type) != null ? b : "text", tabIndex: 0, ref: s.inputRef, defaultValue: k.value, disabled: s.disabled.value === true ? true : void 0 };
    return H({ ourProps: D, theirProps: A, slot: T, attrs: n, slots: o, features: _e.RenderStrategy | _e.Static, name: "ComboboxInput" });
  };
} });
var Fr = defineComponent({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, hold: { type: [Boolean], default: false } }, setup(t, { attrs: e, slots: n, expose: o }) {
  let r = Oe("ComboboxOptions"), s = `headlessui-combobox-options-${te()}`;
  o({ el: r.optionsRef, $el: r.optionsRef }), watchEffect(() => {
    r.optionsPropsRef.value.static = t.static;
  }), watchEffect(() => {
    r.optionsPropsRef.value.hold = t.hold;
  });
  let i = it(), c = computed(() => i !== null ? (i.value & Z.Open) === Z.Open : r.comboboxState.value === 0);
  return hr({ container: computed(() => R(r.optionsRef)), enabled: computed(() => r.comboboxState.value === 0), accept(l) {
    return l.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : l.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(l) {
    l.setAttribute("role", "none");
  } }), () => {
    var l, a, u;
    let p = { open: r.comboboxState.value === 0 }, f = { "aria-labelledby": (u = (l = R(r.labelRef)) == null ? void 0 : l.id) != null ? u : (a = R(r.buttonRef)) == null ? void 0 : a.id, id: s, ref: r.optionsRef, role: "listbox", "aria-multiselectable": r.mode.value === 1 ? true : void 0 }, d = ct(t, ["hold"]);
    return H({ ourProps: f, theirProps: d, slot: p, attrs: e, slots: n, features: _e.RenderStrategy | _e.Static, visible: c.value, name: "ComboboxOptions" });
  };
} });
var Lr = defineComponent({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false } }, setup(t, { slots: e, attrs: n, expose: o }) {
  let r = Oe("ComboboxOption"), s = `headlessui-combobox-option-${te()}`, i = ref(null);
  o({ el: i, $el: i });
  let c = computed(() => r.activeOptionIndex.value !== null ? r.options.value[r.activeOptionIndex.value].id === s : false), l = computed(() => U(r.mode.value, { 0: () => r.compare(toRaw(r.value.value), toRaw(t.value)), 1: () => toRaw(r.value.value).some((k) => r.compare(toRaw(k), toRaw(t.value))) })), a = computed(() => ({ disabled: t.disabled, value: t.value, domRef: i }));
  onMounted(() => r.registerOption(s, a)), onUnmounted(() => r.unregisterOption(s)), watchEffect(() => {
    r.comboboxState.value === 0 && c.value && r.activationTrigger.value !== 0 && nextTick(() => {
      var k, h10;
      return (h10 = (k = R(i)) == null ? void 0 : k.scrollIntoView) == null ? void 0 : h10.call(k, { block: "nearest" });
    });
  });
  function u(k) {
    if (t.disabled)
      return k.preventDefault();
    r.selectOption(s), r.mode.value === 0 && r.closeCombobox(), wr() || requestAnimationFrame(() => {
      var h10;
      return (h10 = R(r.inputRef)) == null ? void 0 : h10.focus();
    });
  }
  function p() {
    if (t.disabled)
      return r.goToOption(G.Nothing);
    r.goToOption(G.Specific, s);
  }
  let f = xr();
  function d(k) {
    f.update(k);
  }
  function v(k) {
    f.wasMoved(k) && (t.disabled || c.value || r.goToOption(G.Specific, s, 0));
  }
  function g(k) {
    f.wasMoved(k) && (t.disabled || c.value && (r.optionsPropsRef.value.hold || r.goToOption(G.Nothing)));
  }
  return () => {
    let { disabled: k } = t, h10 = { active: c.value, selected: l.value, disabled: k }, m = { id: s, ref: i, role: "option", tabIndex: k === true ? void 0 : -1, "aria-disabled": k === true ? true : void 0, "aria-selected": l.value, disabled: void 0, onClick: u, onFocus: p, onPointerenter: d, onMouseenter: d, onPointermove: v, onMousemove: v, onPointerleave: g, onMouseleave: g };
    return H({ ourProps: m, theirProps: t, slot: h10, attrs: n, slots: e, name: "ComboboxOption" });
  };
} });
var ze = ((t) => (t[t.Forwards = 0] = "Forwards", t[t.Backwards = 1] = "Backwards", t))(ze || {});
function Rr() {
  let t = ref(0);
  return oo("keydown", (e) => {
    e.key === "Tab" && (t.value = e.shiftKey ? 1 : 0);
  }), t;
}
function uo(t, e, n, o) {
  He.isServer || watchEffect((r) => {
    t = t ?? window, t.addEventListener(e, n, o), r(() => t.removeEventListener(e, n, o));
  });
}
function Or(t) {
  function e() {
    document.readyState !== "loading" && (t(), document.removeEventListener("DOMContentLoaded", e));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", e), e());
}
function po(t) {
  if (!t)
    return /* @__PURE__ */ new Set();
  if (typeof t == "function")
    return new Set(t());
  let e = /* @__PURE__ */ new Set();
  for (let n of t.value) {
    let o = R(n);
    o instanceof HTMLElement && e.add(o);
  }
  return e;
}
var fo = ((t) => (t[t.None = 1] = "None", t[t.InitialFocus = 2] = "InitialFocus", t[t.TabLock = 4] = "TabLock", t[t.FocusLock = 8] = "FocusLock", t[t.RestoreFocus = 16] = "RestoreFocus", t[t.All = 30] = "All", t))(fo || {});
var Ne = Object.assign(defineComponent({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: ref(/* @__PURE__ */ new Set()) } }, inheritAttrs: false, setup(t, { attrs: e, slots: n, expose: o }) {
  let r = ref(null);
  o({ el: r, $el: r });
  let s = computed(() => ke(r)), i = ref(false);
  onMounted(() => i.value = true), onUnmounted(() => i.value = false), Ir({ ownerDocument: s }, computed(() => i.value && !!(t.features & 16)));
  let c = Mr({ ownerDocument: s, container: r, initialFocus: computed(() => t.initialFocus) }, computed(() => i.value && !!(t.features & 2)));
  Br({ ownerDocument: s, container: r, containers: t.containers, previousActiveElement: c }, computed(() => i.value && !!(t.features & 8)));
  let l = Rr();
  function a(d) {
    let v = R(r);
    v && ((g) => g())(() => {
      U(l.value, { [ze.Forwards]: () => {
        nt(v, ge.First, { skipElements: [d.relatedTarget] });
      }, [ze.Backwards]: () => {
        nt(v, ge.Last, { skipElements: [d.relatedTarget] });
      } });
    });
  }
  let u = ref(false);
  function p(d) {
    d.key === "Tab" && (u.value = true, requestAnimationFrame(() => {
      u.value = false;
    }));
  }
  function f(d) {
    if (!i.value)
      return;
    let v = po(t.containers);
    R(r) instanceof HTMLElement && v.add(R(r));
    let g = d.relatedTarget;
    g instanceof HTMLElement && g.dataset.headlessuiFocusGuard !== "true" && (ho(v, g) || (u.value ? nt(R(r), U(l.value, { [ze.Forwards]: () => ge.Next, [ze.Backwards]: () => ge.Previous }) | ge.WrapAround, { relativeTo: d.target }) : d.target instanceof HTMLElement && Se(d.target)));
  }
  return () => {
    let d = {}, v = { ref: r, onKeydown: p, onFocusout: f }, { features: g, initialFocus: k, containers: h10, ...m } = t;
    return h(Fragment, [!!(g & 4) && h(ot, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: a, features: je.Focusable }), H({ ourProps: v, theirProps: { ...e, ...m }, slot: d, attrs: e, slots: n, name: "FocusTrap" }), !!(g & 4) && h(ot, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: a, features: je.Focusable })]);
  };
} }), { features: fo });
var Ae = [];
Or(() => {
  function t(e) {
    e.target instanceof HTMLElement && e.target !== document.body && Ae[0] !== e.target && (Ae.unshift(e.target), Ae = Ae.filter((n) => n != null && n.isConnected), Ae.splice(10));
  }
  window.addEventListener("click", t, { capture: true }), window.addEventListener("mousedown", t, { capture: true }), window.addEventListener("focus", t, { capture: true }), document.body.addEventListener("click", t, { capture: true }), document.body.addEventListener("mousedown", t, { capture: true }), document.body.addEventListener("focus", t, { capture: true });
});
function Pr(t) {
  let e = ref(Ae.slice());
  return watch([t], ([n], [o]) => {
    o === true && n === false ? Ht(() => {
      e.value.splice(0);
    }) : o === false && n === true && (e.value = Ae.slice());
  }, { flush: "post" }), () => {
    var n;
    return (n = e.value.find((o) => o != null && o.isConnected)) != null ? n : null;
  };
}
function Ir({ ownerDocument: t }, e) {
  let n = Pr(e);
  onMounted(() => {
    watchEffect(() => {
      var o, r;
      e.value || ((o = t.value) == null ? void 0 : o.activeElement) === ((r = t.value) == null ? void 0 : r.body) && Se(n());
    }, { flush: "post" });
  }), onUnmounted(() => {
    e.value && Se(n());
  });
}
function Mr({ ownerDocument: t, container: e, initialFocus: n }, o) {
  let r = ref(null), s = ref(false);
  return onMounted(() => s.value = true), onUnmounted(() => s.value = false), onMounted(() => {
    watch([e, n, o], (i, c) => {
      if (i.every((a, u) => (c == null ? void 0 : c[u]) === a) || !o.value)
        return;
      let l = R(e);
      l && Ht(() => {
        var a, u;
        if (!s.value)
          return;
        let p = R(n), f = (a = t.value) == null ? void 0 : a.activeElement;
        if (p) {
          if (p === f) {
            r.value = f;
            return;
          }
        } else if (l.contains(f)) {
          r.value = f;
          return;
        }
        p ? Se(p) : nt(l, ge.First | ge.NoScroll) === eo.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), r.value = (u = t.value) == null ? void 0 : u.activeElement;
      });
    }, { immediate: true, flush: "post" });
  }), r;
}
function Br({ ownerDocument: t, container: e, containers: n, previousActiveElement: o }, r) {
  var s;
  uo((s = t.value) == null ? void 0 : s.defaultView, "focus", (i) => {
    if (!r.value)
      return;
    let c = po(n);
    R(e) instanceof HTMLElement && c.add(R(e));
    let l = o.value;
    if (!l)
      return;
    let a = i.target;
    a && a instanceof HTMLElement ? ho(c, a) ? (o.value = a, Se(a)) : (i.preventDefault(), i.stopPropagation(), Se(l)) : Se(o.value);
  }, true);
}
function ho(t, e) {
  for (let n of t)
    if (n.contains(e))
      return true;
  return false;
}
var Ct = /* @__PURE__ */ new Map();
var $e = /* @__PURE__ */ new Map();
function pn(t, e = ref(true)) {
  watchEffect((n) => {
    var o;
    if (!e.value)
      return;
    let r = R(t);
    if (!r)
      return;
    n(function() {
      var i;
      if (!r)
        return;
      let c = (i = $e.get(r)) != null ? i : 1;
      if (c === 1 ? $e.delete(r) : $e.set(r, c - 1), c !== 1)
        return;
      let l = Ct.get(r);
      l && (l["aria-hidden"] === null ? r.removeAttribute("aria-hidden") : r.setAttribute("aria-hidden", l["aria-hidden"]), r.inert = l.inert, Ct.delete(r));
    });
    let s = (o = $e.get(r)) != null ? o : 0;
    $e.set(r, s + 1), s === 0 && (Ct.set(r, { "aria-hidden": r.getAttribute("aria-hidden"), inert: r.inert }), r.setAttribute("aria-hidden", "true"), r.inert = true);
  });
}
var mo = Symbol("ForcePortalRootContext");
function Nr() {
  return inject(mo, false);
}
var It = defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(t, { slots: e, attrs: n }) {
  return provide(mo, t.force), () => {
    let { force: o, ...r } = t;
    return H({ theirProps: r, ourProps: {}, slot: {}, slots: e, attrs: n, name: "ForcePortalRoot" });
  };
} });
function $r(t) {
  let e = ke(t);
  if (!e) {
    if (t === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${t}`);
  }
  let n = e.getElementById("headlessui-portal-root");
  if (n)
    return n;
  let o = e.createElement("div");
  return o.setAttribute("id", "headlessui-portal-root"), e.body.appendChild(o);
}
var vo = defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(t, { slots: e, attrs: n }) {
  let o = ref(null), r = computed(() => ke(o)), s = Nr(), i = inject(go, null), c = ref(s === true || i == null ? $r(o.value) : i.resolveTarget());
  watchEffect(() => {
    s || i != null && (c.value = i.resolveTarget());
  });
  let l = inject(Mt, null);
  return onMounted(() => {
    let a = R(o);
    a && l && onUnmounted(l.register(a));
  }), onUnmounted(() => {
    var a, u;
    let p = (a = r.value) == null ? void 0 : a.getElementById("headlessui-portal-root");
    p && c.value === p && c.value.children.length <= 0 && ((u = c.value.parentElement) == null || u.removeChild(c.value));
  }), () => {
    if (c.value === null)
      return null;
    let a = { ref: o, "data-headlessui-portal": "" };
    return h(Teleport, { to: c.value }, H({ ourProps: a, theirProps: t, slot: {}, attrs: n, slots: e, name: "Portal" }));
  };
} });
var Mt = Symbol("PortalParentContext");
function zr() {
  let t = inject(Mt, null), e = ref([]);
  function n(s) {
    return e.value.push(s), t && t.register(s), () => o(s);
  }
  function o(s) {
    let i = e.value.indexOf(s);
    i !== -1 && e.value.splice(i, 1), t && t.unregister(s);
  }
  let r = { register: n, unregister: o, portals: e };
  return [e, defineComponent({ name: "PortalWrapper", setup(s, { slots: i }) {
    return provide(Mt, r), () => {
      var c;
      return (c = i.default) == null ? void 0 : c.call(i);
    };
  } })];
}
var go = Symbol("PortalGroupContext");
var Vr = defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(t, { attrs: e, slots: n }) {
  let o = reactive({ resolveTarget() {
    return t.target;
  } });
  return provide(go, o), () => {
    let { target: r, ...s } = t;
    return H({ theirProps: s, ourProps: {}, slot: {}, attrs: e, slots: n, name: "PortalGroup" });
  };
} });
var bo = Symbol("StackContext");
var Bt = ((t) => (t[t.Add = 0] = "Add", t[t.Remove = 1] = "Remove", t))(Bt || {});
function jr() {
  return inject(bo, () => {
  });
}
function Ur({ type: t, enabled: e, element: n, onUpdate: o }) {
  let r = jr();
  function s(...i) {
    o == null || o(...i), r(...i);
  }
  onMounted(() => {
    watch(e, (i, c) => {
      i ? s(0, t, n) : c === true && s(1, t, n);
    }, { immediate: true, flush: "sync" });
  }), onUnmounted(() => {
    e.value && s(1, t, n);
  }), provide(bo, s);
}
var Co = Symbol("DescriptionContext");
function Hr() {
  let t = inject(Co, null);
  if (t === null)
    throw new Error("Missing parent");
  return t;
}
function Gr({ slot: t = ref({}), name: e = "Description", props: n = {} } = {}) {
  let o = ref([]);
  function r(s) {
    return o.value.push(s), () => {
      let i = o.value.indexOf(s);
      i !== -1 && o.value.splice(i, 1);
    };
  }
  return provide(Co, { register: r, slot: t, name: e, props: n }), computed(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${te()}` } }, setup(t, { attrs: e, slots: n }) {
  let o = Hr();
  return onMounted(() => onUnmounted(o.register(t.id))), () => {
    let { name: r = "Description", slot: s = ref({}), props: i = {} } = o, { id: c, ...l } = t, a = { ...Object.entries(i).reduce((u, [p, f]) => Object.assign(u, { [p]: unref(f) }), {}), id: c };
    return H({ ourProps: a, theirProps: l, slot: s.value, attrs: e, slots: n, name: r });
  };
} });
function Zr(t) {
  let e = shallowRef(t.getSnapshot());
  return onUnmounted(t.subscribe(() => {
    e.value = t.getSnapshot();
  })), e;
}
function Wr(t, e) {
  let n = t(), o = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return n;
  }, subscribe(r) {
    return o.add(r), () => o.delete(r);
  }, dispatch(r, ...s) {
    let i = e[r].call(n, ...s);
    i && (n = i, o.forEach((c) => c()));
  } };
}
function Jr() {
  let t;
  return { before({ doc: e }) {
    var n;
    let o = e.documentElement;
    t = ((n = e.defaultView) != null ? n : window).innerWidth - o.clientWidth;
  }, after({ doc: e, d: n }) {
    let o = e.documentElement, r = o.clientWidth - o.offsetWidth, s = t - r;
    n.style(o, "paddingRight", `${s}px`);
  } };
}
function Kr() {
  if (!lo())
    return {};
  let t;
  return { before() {
    t = window.pageYOffset;
  }, after({ doc: e, d: n, meta: o }) {
    function r(i) {
      return o.containers.flatMap((c) => c()).some((c) => c.contains(i));
    }
    if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
      let i = Re();
      i.style(e.documentElement, "scroll-behavior", "auto"), n.add(() => n.microTask(() => i.dispose()));
    }
    n.style(e.body, "marginTop", `-${t}px`), window.scrollTo(0, 0);
    let s = null;
    n.addEventListener(e, "click", (i) => {
      if (i.target instanceof HTMLElement)
        try {
          let c = i.target.closest("a");
          if (!c)
            return;
          let { hash: l } = new URL(c.href), a = e.querySelector(l);
          a && !r(a) && (s = a);
        } catch {
        }
    }, true), n.addEventListener(e, "touchmove", (i) => {
      i.target instanceof HTMLElement && !r(i.target) && i.preventDefault();
    }, { passive: false }), n.add(() => {
      window.scrollTo(0, window.pageYOffset + t), s && s.isConnected && (s.scrollIntoView({ block: "nearest" }), s = null);
    });
  } };
}
function Yr() {
  return { before({ doc: t, d: e }) {
    e.style(t.documentElement, "overflow", "hidden");
  } };
}
function Qr(t) {
  let e = {};
  for (let n of t)
    Object.assign(e, n(e));
  return e;
}
var Ee = Wr(() => /* @__PURE__ */ new Map(), { PUSH(t, e) {
  var n;
  let o = (n = this.get(t)) != null ? n : { doc: t, count: 0, d: Re(), meta: /* @__PURE__ */ new Set() };
  return o.count++, o.meta.add(e), this.set(t, o), this;
}, POP(t, e) {
  let n = this.get(t);
  return n && (n.count--, n.meta.delete(e)), this;
}, SCROLL_PREVENT({ doc: t, d: e, meta: n }) {
  let o = { doc: t, d: e, meta: Qr(n) }, r = [Kr(), Jr(), Yr()];
  r.forEach(({ before: s }) => s == null ? void 0 : s(o)), r.forEach(({ after: s }) => s == null ? void 0 : s(o));
}, SCROLL_ALLOW({ d: t }) {
  t.dispose();
}, TEARDOWN({ doc: t }) {
  this.delete(t);
} });
Ee.subscribe(() => {
  let t = Ee.getSnapshot(), e = /* @__PURE__ */ new Map();
  for (let [n] of t)
    e.set(n, n.documentElement.style.overflow);
  for (let n of t.values()) {
    let o = e.get(n.doc) === "hidden", r = n.count !== 0;
    (r && !o || !r && o) && Ee.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && Ee.dispatch("TEARDOWN", n);
  }
});
function Xr(t, e, n) {
  let o = Zr(Ee), r = computed(() => {
    let s = t.value ? o.value.get(t.value) : void 0;
    return s ? s.count > 0 : false;
  });
  return watch([t, e], ([s, i], [c], l) => {
    if (!s || !i)
      return;
    Ee.dispatch("PUSH", s, n);
    let a = false;
    l(() => {
      a || (Ee.dispatch("POP", c ?? s, n), a = true);
    });
  }, { immediate: true }), r;
}
function es({ defaultContainers: t = [], portals: e, mainTreeNodeRef: n } = {}) {
  let o = ref(null), r = ke(o);
  function s() {
    var i;
    let c = [];
    for (let l of t)
      l !== null && (l instanceof HTMLElement ? c.push(l) : "value" in l && l.value instanceof HTMLElement && c.push(l.value));
    if (e != null && e.value)
      for (let l of e.value)
        c.push(l);
    for (let l of (i = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? i : [])
      l !== document.body && l !== document.head && l instanceof HTMLElement && l.id !== "headlessui-portal-root" && (l.contains(R(o)) || c.some((a) => l.contains(a)) || c.push(l));
    return c;
  }
  return { resolveContainers: s, contains(i) {
    return s().some((c) => c.contains(i));
  }, mainTreeNodeRef: o, MainTreeNode() {
    return n != null ? null : h(ot, { features: je.Hidden, ref: o });
  } };
}
var ts = ((t) => (t[t.Open = 0] = "Open", t[t.Closed = 1] = "Closed", t))(ts || {});
var Nt = Symbol("DialogContext");
function Ge(t) {
  let e = inject(Nt, null);
  if (e === null) {
    let n = new Error(`<${t} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Ge), n;
  }
  return e;
}
var Ye = "DC8F892D-2EBD-447C-A4C8-A03058436FF4";
var ns = defineComponent({ name: "Dialog", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, open: { type: [Boolean, String], default: Ye }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${te()}` } }, emits: { close: (t) => true }, setup(t, { emit: e, attrs: n, slots: o, expose: r }) {
  var s;
  let i = ref(false);
  onMounted(() => {
    i.value = true;
  });
  let c = ref(0), l = it(), a = computed(() => t.open === Ye && l !== null ? (l.value & Z.Open) === Z.Open : t.open), u = ref(null), p = computed(() => ke(u));
  if (r({ el: u, $el: u }), !(t.open !== Ye || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof a.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${a.value === Ye ? void 0 : t.open}`);
  let f = computed(() => i.value && a.value ? 0 : 1), d = computed(() => f.value === 0), v = computed(() => c.value > 1), g = inject(Nt, null) !== null, [k, h10] = zr(), { resolveContainers: m, mainTreeNodeRef: C, MainTreeNode: y } = es({ portals: k, defaultContainers: [computed(() => {
    var M;
    return (M = F.panelRef.value) != null ? M : u.value;
  })] }), w = computed(() => v.value ? "parent" : "leaf"), b = computed(() => l !== null ? (l.value & Z.Closing) === Z.Closing : false), T = computed(() => g || b.value ? false : d.value), I = computed(() => {
    var M, $, ne;
    return (ne = Array.from(($ = (M = p.value) == null ? void 0 : M.querySelectorAll("body > *")) != null ? $ : []).find((oe) => oe.id === "headlessui-portal-root" ? false : oe.contains(R(C)) && oe instanceof HTMLElement)) != null ? ne : null;
  });
  pn(I, T);
  let S = computed(() => v.value ? true : d.value), x = computed(() => {
    var M, $, ne;
    return (ne = Array.from(($ = (M = p.value) == null ? void 0 : M.querySelectorAll("[data-headlessui-portal]")) != null ? $ : []).find((oe) => oe.contains(R(C)) && oe instanceof HTMLElement)) != null ? ne : null;
  });
  pn(x, S), Ur({ type: "Dialog", enabled: computed(() => f.value === 0), element: u, onUpdate: (M, $) => {
    if ($ === "Dialog")
      return U(M, { [Bt.Add]: () => c.value += 1, [Bt.Remove]: () => c.value -= 1 });
  } });
  let A = Gr({ name: "DialogDescription", slot: computed(() => ({ open: a.value })) }), D = ref(null), F = { titleId: D, panelRef: ref(null), dialogState: f, setTitleId(M) {
    D.value !== M && (D.value = M);
  }, close() {
    e("close", false);
  } };
  provide(Nt, F);
  let _ = computed(() => !(!d.value || v.value));
  ro(m, (M, $) => {
    F.close(), nextTick(() => $ == null ? void 0 : $.focus());
  }, _);
  let O = computed(() => !(v.value || f.value !== 0));
  uo((s = p.value) == null ? void 0 : s.defaultView, "keydown", (M) => {
    O.value && (M.defaultPrevented || M.key === J.Escape && (M.preventDefault(), M.stopPropagation(), F.close()));
  });
  let P = computed(() => !(b.value || f.value !== 0 || g));
  return Xr(p, P, (M) => {
    var $;
    return { containers: [...($ = M.containers) != null ? $ : [], m] };
  }), watchEffect((M) => {
    if (f.value !== 0)
      return;
    let $ = R(u);
    if (!$)
      return;
    let ne = new ResizeObserver((oe) => {
      for (let Je of oe) {
        let de = Je.target.getBoundingClientRect();
        de.x === 0 && de.y === 0 && de.width === 0 && de.height === 0 && F.close();
      }
    });
    ne.observe($), M(() => ne.disconnect());
  }), () => {
    let { id: M, open: $, initialFocus: ne, ...oe } = t, Je = { ...n, ref: u, id: M, role: "dialog", "aria-modal": f.value === 0 ? true : void 0, "aria-labelledby": D.value, "aria-describedby": A.value }, de = { open: f.value === 0 };
    return h(It, { force: true }, () => [h(vo, () => h(Vr, { target: u.value }, () => h(It, { force: false }, () => h(Ne, { initialFocus: ne, containers: m, features: d.value ? U(w.value, { parent: Ne.features.RestoreFocus, leaf: Ne.features.All & ~Ne.features.FocusLock }) : Ne.features.None }, () => h(h10, {}, () => H({ ourProps: Je, theirProps: { ...oe, ...n }, slot: de, attrs: n, slots: o, visible: f.value === 0, features: _e.RenderStrategy | _e.Static, name: "Dialog" })))))), h(y)]);
  };
} });
defineComponent({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${te()}` } }, setup(t, { attrs: e, slots: n }) {
  let o = Ge("DialogOverlay");
  function r(s) {
    s.target === s.currentTarget && (s.preventDefault(), s.stopPropagation(), o.close());
  }
  return () => {
    let { id: s, ...i } = t;
    return H({ ourProps: { id: s, "aria-hidden": true, onClick: r }, theirProps: i, slot: { open: o.dialogState.value === 0 }, attrs: e, slots: n, name: "DialogOverlay" });
  };
} });
defineComponent({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${te()}` } }, inheritAttrs: false, setup(t, { attrs: e, slots: n, expose: o }) {
  let r = Ge("DialogBackdrop"), s = ref(null);
  return o({ el: s, $el: s }), onMounted(() => {
    if (r.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: i, ...c } = t, l = { id: i, ref: s, "aria-hidden": true };
    return h(It, { force: true }, () => h(vo, () => H({ ourProps: l, theirProps: { ...e, ...c }, slot: { open: r.dialogState.value === 0 }, attrs: e, slots: n, name: "DialogBackdrop" })));
  };
} });
var os = defineComponent({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${te()}` } }, setup(t, { attrs: e, slots: n, expose: o }) {
  let r = Ge("DialogPanel");
  o({ el: r.panelRef, $el: r.panelRef });
  function s(i) {
    i.stopPropagation();
  }
  return () => {
    let { id: i, ...c } = t, l = { id: i, ref: r.panelRef, onClick: s };
    return H({ ourProps: l, theirProps: c, slot: { open: r.dialogState.value === 0 }, attrs: e, slots: n, name: "DialogPanel" });
  };
} });
defineComponent({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${te()}` } }, setup(t, { attrs: e, slots: n }) {
  let o = Ge("DialogTitle");
  return onMounted(() => {
    o.setTitleId(t.id), onUnmounted(() => o.setTitleId(null));
  }), () => {
    let { id: r, ...s } = t;
    return H({ ourProps: { id: r }, theirProps: s, slot: { open: o.dialogState.value === 0 }, attrs: e, slots: n, name: "DialogTitle" });
  };
} });
function rs(t) {
  let e = { called: false };
  return (...n) => {
    if (!e.called)
      return e.called = true, t(...n);
  };
}
function _t(t, ...e) {
  t && e.length > 0 && t.classList.add(...e);
}
function Qe(t, ...e) {
  t && e.length > 0 && t.classList.remove(...e);
}
var $t = ((t) => (t.Finished = "finished", t.Cancelled = "cancelled", t))($t || {});
function ss(t, e) {
  let n = Re();
  if (!t)
    return n.dispose;
  let { transitionDuration: o, transitionDelay: r } = getComputedStyle(t), [s, i] = [o, r].map((c) => {
    let [l = 0] = c.split(",").filter(Boolean).map((a) => a.includes("ms") ? parseFloat(a) : parseFloat(a) * 1e3).sort((a, u) => u - a);
    return l;
  });
  return s !== 0 ? n.setTimeout(() => e("finished"), s + i) : e("finished"), n.add(() => e("cancelled")), n.dispose;
}
function fn(t, e, n, o, r, s) {
  let i = Re(), c = s !== void 0 ? rs(s) : () => {
  };
  return Qe(t, ...r), _t(t, ...e, ...n), i.nextFrame(() => {
    Qe(t, ...n), _t(t, ...o), i.add(ss(t, (l) => (Qe(t, ...o, ...e), _t(t, ...r), c(l))));
  }), i.add(() => Qe(t, ...e, ...n, ...o, ...r)), i.add(() => c("cancelled")), i.dispose;
}
function ye(t = "") {
  return t.split(" ").filter((e) => e.trim().length > 1);
}
var Gt = Symbol("TransitionContext");
var cs = ((t) => (t.Visible = "visible", t.Hidden = "hidden", t))(cs || {});
function is() {
  return inject(Gt, null) !== null;
}
function ls() {
  let t = inject(Gt, null);
  if (t === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return t;
}
function as() {
  let t = inject(Zt, null);
  if (t === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return t;
}
var Zt = Symbol("NestingContext");
function lt(t) {
  return "children" in t ? lt(t.children) : t.value.filter(({ state: e }) => e === "visible").length > 0;
}
function _o(t) {
  let e = ref([]), n = ref(false);
  onMounted(() => n.value = true), onUnmounted(() => n.value = false);
  function o(s, i = be.Hidden) {
    let c = e.value.findIndex(({ id: l }) => l === s);
    c !== -1 && (U(i, { [be.Unmount]() {
      e.value.splice(c, 1);
    }, [be.Hidden]() {
      e.value[c].state = "hidden";
    } }), !lt(e) && n.value && (t == null || t()));
  }
  function r(s) {
    let i = e.value.find(({ id: c }) => c === s);
    return i ? i.state !== "visible" && (i.state = "visible") : e.value.push({ id: s, state: "visible" }), () => o(s, be.Unmount);
  }
  return { children: e, register: r, unregister: o };
}
var ko = _e.RenderStrategy;
var zt = defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(t, { emit: e, attrs: n, slots: o, expose: r }) {
  let s = ref(0);
  function i() {
    s.value |= Z.Opening, e("beforeEnter");
  }
  function c() {
    s.value &= ~Z.Opening, e("afterEnter");
  }
  function l() {
    s.value |= Z.Closing, e("beforeLeave");
  }
  function a() {
    s.value &= ~Z.Closing, e("afterLeave");
  }
  if (!is() && ar())
    return () => h(xo, { ...t, onBeforeEnter: i, onAfterEnter: c, onBeforeLeave: l, onAfterLeave: a }, o);
  let u = ref(null), p = computed(() => t.unmount ? be.Unmount : be.Hidden);
  r({ el: u, $el: u });
  let { show: f, appear: d } = ls(), { register: v, unregister: g } = as(), k = ref(f.value ? "visible" : "hidden"), h10 = { value: true }, m = te(), C = { value: false }, y = _o(() => {
    !C.value && k.value !== "hidden" && (k.value = "hidden", g(m), a());
  });
  onMounted(() => {
    let F = v(m);
    onUnmounted(F);
  }), watchEffect(() => {
    if (p.value === be.Hidden && m) {
      if (f.value && k.value !== "visible") {
        k.value = "visible";
        return;
      }
      U(k.value, { hidden: () => g(m), visible: () => v(m) });
    }
  });
  let w = ye(t.enter), b = ye(t.enterFrom), T = ye(t.enterTo), I = ye(t.entered), S = ye(t.leave), x = ye(t.leaveFrom), A = ye(t.leaveTo);
  onMounted(() => {
    watchEffect(() => {
      if (k.value === "visible") {
        let F = R(u);
        if (F instanceof Comment && F.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function D(F) {
    let _ = h10.value && !d.value, O = R(u);
    !O || !(O instanceof HTMLElement) || _ || (C.value = true, f.value && i(), f.value || l(), F(f.value ? fn(O, w, b, T, I, (P) => {
      C.value = false, P === $t.Finished && c();
    }) : fn(O, S, x, A, I, (P) => {
      C.value = false, P === $t.Finished && (lt(y) || (k.value = "hidden", g(m), a()));
    })));
  }
  return onMounted(() => {
    watch([f], (F, _, O) => {
      D(O), h10.value = false;
    }, { immediate: true });
  }), provide(Zt, y), Xn(computed(() => U(k.value, { visible: Z.Open, hidden: Z.Closed }) | s.value)), () => {
    let { appear: F, show: _, enter: O, enterFrom: P, enterTo: M, entered: $, leave: ne, leaveFrom: oe, leaveTo: Je, ...de } = t, Uo = { ref: u }, Ho = { ...de, ...d.value && f.value && He.isServer ? { class: normalizeClass([n.class, de.class, ...w, ...b]) } : {} };
    return H({ theirProps: Ho, ourProps: Uo, slot: {}, slots: o, attrs: n, features: ko, visible: k.value === "visible", name: "TransitionChild" });
  };
} });
var us = zt;
var xo = defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(t, { emit: e, attrs: n, slots: o }) {
  let r = it(), s = computed(() => t.show === null && r !== null ? (r.value & Z.Open) === Z.Open : t.show);
  watchEffect(() => {
    if (![true, false].includes(s.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let i = ref(s.value ? "visible" : "hidden"), c = _o(() => {
    i.value = "hidden";
  }), l = ref(true), a = { show: s, appear: computed(() => t.appear || !l.value) };
  return onMounted(() => {
    watchEffect(() => {
      l.value = false, s.value ? i.value = "visible" : lt(c) || (i.value = "hidden");
    });
  }), provide(Zt, c), provide(Gt, a), () => {
    let u = ct(t, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), p = { unmount: t.unmount };
    return H({ ourProps: { ...p, as: "template" }, theirProps: {}, slot: {}, slots: { ...o, default: () => [h(us, { onBeforeEnter: () => e("beforeEnter"), onAfterEnter: () => e("afterEnter"), onBeforeLeave: () => e("beforeLeave"), onAfterLeave: () => e("afterLeave"), ...n, ...p, ...u }, o.default)] }, attrs: {}, features: ko, visible: i.value === "visible", name: "Transition" });
  };
} });
function ps(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function fs(t) {
  if (t.__esModule)
    return t;
  var e = t.default;
  if (typeof e == "function") {
    var n = function o() {
      return this instanceof o ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    n.prototype = e.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: true }), Object.keys(t).forEach(function(o) {
    var r = Object.getOwnPropertyDescriptor(t, o);
    Object.defineProperty(n, o, r.get ? r : {
      enumerable: true,
      get: function() {
        return t[o];
      }
    });
  }), n;
}
var B = {};
var ds = "Á";
var hs = "á";
var ms = "Ă";
var vs = "ă";
var gs = "∾";
var bs = "∿";
var Cs = "∾̳";
var _s = "Â";
var ks = "â";
var xs = "´";
var ys = "А";
var ws = "а";
var As = "Æ";
var Es = "æ";
var Ds = "⁡";
var Ss = "𝔄";
var qs = "𝔞";
var Ts = "À";
var Fs = "à";
var Ls = "ℵ";
var Rs = "ℵ";
var Os = "Α";
var Ps = "α";
var Is = "Ā";
var Ms = "ā";
var Bs = "⨿";
var Ns = "&";
var $s = "&";
var zs = "⩕";
var Vs = "⩓";
var js = "∧";
var Us = "⩜";
var Hs = "⩘";
var Gs = "⩚";
var Zs = "∠";
var Ws = "⦤";
var Js = "∠";
var Ks = "⦨";
var Ys = "⦩";
var Qs = "⦪";
var Xs = "⦫";
var ec = "⦬";
var tc = "⦭";
var nc = "⦮";
var oc = "⦯";
var rc = "∡";
var sc = "∟";
var cc = "⊾";
var ic = "⦝";
var lc = "∢";
var ac = "Å";
var uc = "⍼";
var pc = "Ą";
var fc = "ą";
var dc = "𝔸";
var hc = "𝕒";
var mc = "⩯";
var vc = "≈";
var gc = "⩰";
var bc = "≊";
var Cc = "≋";
var _c = "'";
var kc = "⁡";
var xc = "≈";
var yc = "≊";
var wc = "Å";
var Ac = "å";
var Ec = "𝒜";
var Dc = "𝒶";
var Sc = "≔";
var qc = "*";
var Tc = "≈";
var Fc = "≍";
var Lc = "Ã";
var Rc = "ã";
var Oc = "Ä";
var Pc = "ä";
var Ic = "∳";
var Mc = "⨑";
var Bc = "≌";
var Nc = "϶";
var $c = "‵";
var zc = "∽";
var Vc = "⋍";
var jc = "∖";
var Uc = "⫧";
var Hc = "⊽";
var Gc = "⌅";
var Zc = "⌆";
var Wc = "⌅";
var Jc = "⎵";
var Kc = "⎶";
var Yc = "≌";
var Qc = "Б";
var Xc = "б";
var ei = "„";
var ti = "∵";
var ni = "∵";
var oi = "∵";
var ri = "⦰";
var si = "϶";
var ci = "ℬ";
var ii = "ℬ";
var li = "Β";
var ai = "β";
var ui = "ℶ";
var pi = "≬";
var fi = "𝔅";
var di = "𝔟";
var hi = "⋂";
var mi = "◯";
var vi = "⋃";
var gi = "⨀";
var bi = "⨁";
var Ci = "⨂";
var _i = "⨆";
var ki = "★";
var xi = "▽";
var yi = "△";
var wi = "⨄";
var Ai = "⋁";
var Ei = "⋀";
var Di = "⤍";
var Si = "⧫";
var qi = "▪";
var Ti = "▴";
var Fi = "▾";
var Li = "◂";
var Ri = "▸";
var Oi = "␣";
var Pi = "▒";
var Ii = "░";
var Mi = "▓";
var Bi = "█";
var Ni = "=⃥";
var $i = "≡⃥";
var zi = "⫭";
var Vi = "⌐";
var ji = "𝔹";
var Ui = "𝕓";
var Hi = "⊥";
var Gi = "⊥";
var Zi = "⋈";
var Wi = "⧉";
var Ji = "┐";
var Ki = "╕";
var Yi = "╖";
var Qi = "╗";
var Xi = "┌";
var el = "╒";
var tl = "╓";
var nl = "╔";
var ol = "─";
var rl = "═";
var sl = "┬";
var cl = "╤";
var il = "╥";
var ll = "╦";
var al = "┴";
var ul = "╧";
var pl = "╨";
var fl = "╩";
var dl = "⊟";
var hl = "⊞";
var ml = "⊠";
var vl = "┘";
var gl = "╛";
var bl = "╜";
var Cl = "╝";
var _l = "└";
var kl = "╘";
var xl = "╙";
var yl = "╚";
var wl = "│";
var Al = "║";
var El = "┼";
var Dl = "╪";
var Sl = "╫";
var ql = "╬";
var Tl = "┤";
var Fl = "╡";
var Ll = "╢";
var Rl = "╣";
var Ol = "├";
var Pl = "╞";
var Il = "╟";
var Ml = "╠";
var Bl = "‵";
var Nl = "˘";
var $l = "˘";
var zl = "¦";
var Vl = "𝒷";
var jl = "ℬ";
var Ul = "⁏";
var Hl = "∽";
var Gl = "⋍";
var Zl = "⧅";
var Wl = "\\";
var Jl = "⟈";
var Kl = "•";
var Yl = "•";
var Ql = "≎";
var Xl = "⪮";
var ea = "≏";
var ta = "≎";
var na = "≏";
var oa = "Ć";
var ra = "ć";
var sa = "⩄";
var ca = "⩉";
var ia = "⩋";
var la = "∩";
var aa = "⋒";
var ua = "⩇";
var pa = "⩀";
var fa = "ⅅ";
var da = "∩︀";
var ha = "⁁";
var ma = "ˇ";
var va = "ℭ";
var ga = "⩍";
var ba = "Č";
var Ca = "č";
var _a = "Ç";
var ka = "ç";
var xa = "Ĉ";
var ya = "ĉ";
var wa = "∰";
var Aa = "⩌";
var Ea = "⩐";
var Da = "Ċ";
var Sa = "ċ";
var qa = "¸";
var Ta = "¸";
var Fa = "⦲";
var La = "¢";
var Ra = "·";
var Oa = "·";
var Pa = "𝔠";
var Ia = "ℭ";
var Ma = "Ч";
var Ba = "ч";
var Na = "✓";
var $a = "✓";
var za = "Χ";
var Va = "χ";
var ja = "ˆ";
var Ua = "≗";
var Ha = "↺";
var Ga = "↻";
var Za = "⊛";
var Wa = "⊚";
var Ja = "⊝";
var Ka = "⊙";
var Ya = "®";
var Qa = "Ⓢ";
var Xa = "⊖";
var eu = "⊕";
var tu = "⊗";
var nu = "○";
var ou = "⧃";
var ru = "≗";
var su = "⨐";
var cu = "⫯";
var iu = "⧂";
var lu = "∲";
var au = "”";
var uu = "’";
var pu = "♣";
var fu = "♣";
var du = ":";
var hu = "∷";
var mu = "⩴";
var vu = "≔";
var gu = "≔";
var bu = ",";
var Cu = "@";
var _u = "∁";
var ku = "∘";
var xu = "∁";
var yu = "ℂ";
var wu = "≅";
var Au = "⩭";
var Eu = "≡";
var Du = "∮";
var Su = "∯";
var qu = "∮";
var Tu = "𝕔";
var Fu = "ℂ";
var Lu = "∐";
var Ru = "∐";
var Ou = "©";
var Pu = "©";
var Iu = "℗";
var Mu = "∳";
var Bu = "↵";
var Nu = "✗";
var $u = "⨯";
var zu = "𝒞";
var Vu = "𝒸";
var ju = "⫏";
var Uu = "⫑";
var Hu = "⫐";
var Gu = "⫒";
var Zu = "⋯";
var Wu = "⤸";
var Ju = "⤵";
var Ku = "⋞";
var Yu = "⋟";
var Qu = "↶";
var Xu = "⤽";
var e1 = "⩈";
var t1 = "⩆";
var n1 = "≍";
var o1 = "∪";
var r1 = "⋓";
var s1 = "⩊";
var c1 = "⊍";
var i1 = "⩅";
var l1 = "∪︀";
var a1 = "↷";
var u1 = "⤼";
var p1 = "⋞";
var f1 = "⋟";
var d1 = "⋎";
var h1 = "⋏";
var m1 = "¤";
var v1 = "↶";
var g1 = "↷";
var b1 = "⋎";
var C1 = "⋏";
var _1 = "∲";
var k1 = "∱";
var x1 = "⌭";
var y1 = "†";
var w1 = "‡";
var A1 = "ℸ";
var E1 = "↓";
var D1 = "↡";
var S1 = "⇓";
var q1 = "‐";
var T1 = "⫤";
var F1 = "⊣";
var L1 = "⤏";
var R1 = "˝";
var O1 = "Ď";
var P1 = "ď";
var I1 = "Д";
var M1 = "д";
var B1 = "‡";
var N1 = "⇊";
var $1 = "ⅅ";
var z1 = "ⅆ";
var V1 = "⤑";
var j1 = "⩷";
var U1 = "°";
var H1 = "∇";
var G1 = "Δ";
var Z1 = "δ";
var W1 = "⦱";
var J1 = "⥿";
var K1 = "𝔇";
var Y1 = "𝔡";
var Q1 = "⥥";
var X1 = "⇃";
var ep = "⇂";
var tp = "´";
var np = "˙";
var op = "˝";
var rp = "`";
var sp = "˜";
var cp = "⋄";
var ip = "⋄";
var lp = "⋄";
var ap = "♦";
var up = "♦";
var pp = "¨";
var fp = "ⅆ";
var dp = "ϝ";
var hp = "⋲";
var mp = "÷";
var vp = "÷";
var gp = "⋇";
var bp = "⋇";
var Cp = "Ђ";
var _p = "ђ";
var kp = "⌞";
var xp = "⌍";
var yp = "$";
var wp = "𝔻";
var Ap = "𝕕";
var Ep = "¨";
var Dp = "˙";
var Sp = "⃜";
var qp = "≐";
var Tp = "≑";
var Fp = "≐";
var Lp = "∸";
var Rp = "∔";
var Op = "⊡";
var Pp = "⌆";
var Ip = "∯";
var Mp = "¨";
var Bp = "⇓";
var Np = "⇐";
var $p = "⇔";
var zp = "⫤";
var Vp = "⟸";
var jp = "⟺";
var Up = "⟹";
var Hp = "⇒";
var Gp = "⊨";
var Zp = "⇑";
var Wp = "⇕";
var Jp = "∥";
var Kp = "⤓";
var Yp = "↓";
var Qp = "↓";
var Xp = "⇓";
var ef = "⇵";
var tf = "̑";
var nf = "⇊";
var of = "⇃";
var rf = "⇂";
var sf = "⥐";
var cf = "⥞";
var lf = "⥖";
var af = "↽";
var uf = "⥟";
var pf = "⥗";
var ff = "⇁";
var df = "↧";
var hf = "⊤";
var mf = "⤐";
var vf = "⌟";
var gf = "⌌";
var bf = "𝒟";
var Cf = "𝒹";
var _f = "Ѕ";
var kf = "ѕ";
var xf = "⧶";
var yf = "Đ";
var wf = "đ";
var Af = "⋱";
var Ef = "▿";
var Df = "▾";
var Sf = "⇵";
var qf = "⥯";
var Tf = "⦦";
var Ff = "Џ";
var Lf = "џ";
var Rf = "⟿";
var Of = "É";
var Pf = "é";
var If = "⩮";
var Mf = "Ě";
var Bf = "ě";
var Nf = "Ê";
var $f = "ê";
var zf = "≖";
var Vf = "≕";
var jf = "Э";
var Uf = "э";
var Hf = "⩷";
var Gf = "Ė";
var Zf = "ė";
var Wf = "≑";
var Jf = "ⅇ";
var Kf = "≒";
var Yf = "𝔈";
var Qf = "𝔢";
var Xf = "⪚";
var ed = "È";
var td = "è";
var nd = "⪖";
var od = "⪘";
var rd = "⪙";
var sd = "∈";
var cd = "⏧";
var id = "ℓ";
var ld = "⪕";
var ad = "⪗";
var ud = "Ē";
var pd = "ē";
var fd = "∅";
var dd = "∅";
var hd = "◻";
var md = "∅";
var vd = "▫";
var gd = " ";
var bd = " ";
var Cd = " ";
var _d = "Ŋ";
var kd = "ŋ";
var xd = " ";
var yd = "Ę";
var wd = "ę";
var Ad = "𝔼";
var Ed = "𝕖";
var Dd = "⋕";
var Sd = "⧣";
var qd = "⩱";
var Td = "ε";
var Fd = "Ε";
var Ld = "ε";
var Rd = "ϵ";
var Od = "≖";
var Pd = "≕";
var Id = "≂";
var Md = "⪖";
var Bd = "⪕";
var Nd = "⩵";
var $d = "=";
var zd = "≂";
var Vd = "≟";
var jd = "⇌";
var Ud = "≡";
var Hd = "⩸";
var Gd = "⧥";
var Zd = "⥱";
var Wd = "≓";
var Jd = "ℯ";
var Kd = "ℰ";
var Yd = "≐";
var Qd = "⩳";
var Xd = "≂";
var e2 = "Η";
var t2 = "η";
var n2 = "Ð";
var o2 = "ð";
var r2 = "Ë";
var s2 = "ë";
var c2 = "€";
var i2 = "!";
var l2 = "∃";
var a2 = "∃";
var u2 = "ℰ";
var p2 = "ⅇ";
var f2 = "ⅇ";
var d2 = "≒";
var h2 = "Ф";
var m2 = "ф";
var v2 = "♀";
var g2 = "ﬃ";
var b2 = "ﬀ";
var C2 = "ﬄ";
var _2 = "𝔉";
var k2 = "𝔣";
var x2 = "ﬁ";
var y2 = "◼";
var w2 = "▪";
var A2 = "fj";
var E2 = "♭";
var D2 = "ﬂ";
var S2 = "▱";
var q2 = "ƒ";
var T2 = "𝔽";
var F2 = "𝕗";
var L2 = "∀";
var R2 = "∀";
var O2 = "⋔";
var P2 = "⫙";
var I2 = "ℱ";
var M2 = "⨍";
var B2 = "½";
var N2 = "⅓";
var $2 = "¼";
var z2 = "⅕";
var V2 = "⅙";
var j2 = "⅛";
var U2 = "⅔";
var H2 = "⅖";
var G2 = "¾";
var Z2 = "⅗";
var W2 = "⅜";
var J2 = "⅘";
var K2 = "⅚";
var Y2 = "⅝";
var Q2 = "⅞";
var X2 = "⁄";
var e0 = "⌢";
var t0 = "𝒻";
var n0 = "ℱ";
var o0 = "ǵ";
var r0 = "Γ";
var s0 = "γ";
var c0 = "Ϝ";
var i0 = "ϝ";
var l0 = "⪆";
var a0 = "Ğ";
var u0 = "ğ";
var p0 = "Ģ";
var f0 = "Ĝ";
var d0 = "ĝ";
var h0 = "Г";
var m0 = "г";
var v0 = "Ġ";
var g0 = "ġ";
var b0 = "≥";
var C0 = "≧";
var _0 = "⪌";
var k0 = "⋛";
var x0 = "≥";
var y0 = "≧";
var w0 = "⩾";
var A0 = "⪩";
var E0 = "⩾";
var D0 = "⪀";
var S0 = "⪂";
var q0 = "⪄";
var T0 = "⋛︀";
var F0 = "⪔";
var L0 = "𝔊";
var R0 = "𝔤";
var O0 = "≫";
var P0 = "⋙";
var I0 = "⋙";
var M0 = "ℷ";
var B0 = "Ѓ";
var N0 = "ѓ";
var $0 = "⪥";
var z0 = "≷";
var V0 = "⪒";
var j0 = "⪤";
var U0 = "⪊";
var H0 = "⪊";
var G0 = "⪈";
var Z0 = "≩";
var W0 = "⪈";
var J0 = "≩";
var K0 = "⋧";
var Y0 = "𝔾";
var Q0 = "𝕘";
var X0 = "`";
var eh = "≥";
var th = "⋛";
var nh = "≧";
var oh = "⪢";
var rh = "≷";
var sh = "⩾";
var ch = "≳";
var ih = "𝒢";
var lh = "ℊ";
var ah = "≳";
var uh = "⪎";
var ph = "⪐";
var fh = "⪧";
var dh = "⩺";
var hh = ">";
var mh = ">";
var vh = "≫";
var gh = "⋗";
var bh = "⦕";
var Ch = "⩼";
var _h = "⪆";
var kh = "⥸";
var xh = "⋗";
var yh = "⋛";
var wh = "⪌";
var Ah = "≷";
var Eh = "≳";
var Dh = "≩︀";
var Sh = "≩︀";
var qh = "ˇ";
var Th = " ";
var Fh = "½";
var Lh = "ℋ";
var Rh = "Ъ";
var Oh = "ъ";
var Ph = "⥈";
var Ih = "↔";
var Mh = "⇔";
var Bh = "↭";
var Nh = "^";
var $h = "ℏ";
var zh = "Ĥ";
var Vh = "ĥ";
var jh = "♥";
var Uh = "♥";
var Hh = "…";
var Gh = "⊹";
var Zh = "𝔥";
var Wh = "ℌ";
var Jh = "ℋ";
var Kh = "⤥";
var Yh = "⤦";
var Qh = "⇿";
var Xh = "∻";
var e3 = "↩";
var t3 = "↪";
var n3 = "𝕙";
var o3 = "ℍ";
var r3 = "―";
var s3 = "─";
var c3 = "𝒽";
var i3 = "ℋ";
var l3 = "ℏ";
var a3 = "Ħ";
var u3 = "ħ";
var p3 = "≎";
var f3 = "≏";
var d3 = "⁃";
var h3 = "‐";
var m3 = "Í";
var v3 = "í";
var g3 = "⁣";
var b3 = "Î";
var C3 = "î";
var _3 = "И";
var k3 = "и";
var x3 = "İ";
var y3 = "Е";
var w3 = "е";
var A3 = "¡";
var E3 = "⇔";
var D3 = "𝔦";
var S3 = "ℑ";
var q3 = "Ì";
var T3 = "ì";
var F3 = "ⅈ";
var L3 = "⨌";
var R3 = "∭";
var O3 = "⧜";
var P3 = "℩";
var I3 = "Ĳ";
var M3 = "ĳ";
var B3 = "Ī";
var N3 = "ī";
var $3 = "ℑ";
var z3 = "ⅈ";
var V3 = "ℐ";
var j3 = "ℑ";
var U3 = "ı";
var H3 = "ℑ";
var G3 = "⊷";
var Z3 = "Ƶ";
var W3 = "⇒";
var J3 = "℅";
var K3 = "∞";
var Y3 = "⧝";
var Q3 = "ı";
var X3 = "⊺";
var em = "∫";
var tm = "∬";
var nm = "ℤ";
var om = "∫";
var rm = "⊺";
var sm = "⋂";
var cm = "⨗";
var im = "⨼";
var lm = "⁣";
var am = "⁢";
var um = "Ё";
var pm = "ё";
var fm = "Į";
var dm = "į";
var hm = "𝕀";
var mm = "𝕚";
var vm = "Ι";
var gm = "ι";
var bm = "⨼";
var Cm = "¿";
var _m = "𝒾";
var km = "ℐ";
var xm = "∈";
var ym = "⋵";
var wm = "⋹";
var Am = "⋴";
var Em = "⋳";
var Dm = "∈";
var Sm = "⁢";
var qm = "Ĩ";
var Tm = "ĩ";
var Fm = "І";
var Lm = "і";
var Rm = "Ï";
var Om = "ï";
var Pm = "Ĵ";
var Im = "ĵ";
var Mm = "Й";
var Bm = "й";
var Nm = "𝔍";
var $m = "𝔧";
var zm = "ȷ";
var Vm = "𝕁";
var jm = "𝕛";
var Um = "𝒥";
var Hm = "𝒿";
var Gm = "Ј";
var Zm = "ј";
var Wm = "Є";
var Jm = "є";
var Km = "Κ";
var Ym = "κ";
var Qm = "ϰ";
var Xm = "Ķ";
var ev = "ķ";
var tv = "К";
var nv = "к";
var ov = "𝔎";
var rv = "𝔨";
var sv = "ĸ";
var cv = "Х";
var iv = "х";
var lv = "Ќ";
var av = "ќ";
var uv = "𝕂";
var pv = "𝕜";
var fv = "𝒦";
var dv = "𝓀";
var hv = "⇚";
var mv = "Ĺ";
var vv = "ĺ";
var gv = "⦴";
var bv = "ℒ";
var Cv = "Λ";
var _v = "λ";
var kv = "⟨";
var xv = "⟪";
var yv = "⦑";
var wv = "⟨";
var Av = "⪅";
var Ev = "ℒ";
var Dv = "«";
var Sv = "⇤";
var qv = "⤟";
var Tv = "←";
var Fv = "↞";
var Lv = "⇐";
var Rv = "⤝";
var Ov = "↩";
var Pv = "↫";
var Iv = "⤹";
var Mv = "⥳";
var Bv = "↢";
var Nv = "⤙";
var $v = "⤛";
var zv = "⪫";
var Vv = "⪭";
var jv = "⪭︀";
var Uv = "⤌";
var Hv = "⤎";
var Gv = "❲";
var Zv = "{";
var Wv = "[";
var Jv = "⦋";
var Kv = "⦏";
var Yv = "⦍";
var Qv = "Ľ";
var Xv = "ľ";
var e6 = "Ļ";
var t6 = "ļ";
var n6 = "⌈";
var o6 = "{";
var r6 = "Л";
var s6 = "л";
var c6 = "⤶";
var i6 = "“";
var l6 = "„";
var a6 = "⥧";
var u6 = "⥋";
var p6 = "↲";
var f6 = "≤";
var d6 = "≦";
var h6 = "⟨";
var m6 = "⇤";
var v6 = "←";
var g6 = "←";
var b6 = "⇐";
var C6 = "⇆";
var _6 = "↢";
var k6 = "⌈";
var x6 = "⟦";
var y6 = "⥡";
var w6 = "⥙";
var A6 = "⇃";
var E6 = "⌊";
var D6 = "↽";
var S6 = "↼";
var q6 = "⇇";
var T6 = "↔";
var F6 = "↔";
var L6 = "⇔";
var R6 = "⇆";
var O6 = "⇋";
var P6 = "↭";
var I6 = "⥎";
var M6 = "↤";
var B6 = "⊣";
var N6 = "⥚";
var $6 = "⋋";
var z6 = "⧏";
var V6 = "⊲";
var j6 = "⊴";
var U6 = "⥑";
var H6 = "⥠";
var G6 = "⥘";
var Z6 = "↿";
var W6 = "⥒";
var J6 = "↼";
var K6 = "⪋";
var Y6 = "⋚";
var Q6 = "≤";
var X6 = "≦";
var eg = "⩽";
var tg = "⪨";
var ng = "⩽";
var og = "⩿";
var rg = "⪁";
var sg = "⪃";
var cg = "⋚︀";
var ig = "⪓";
var lg = "⪅";
var ag = "⋖";
var ug = "⋚";
var pg = "⪋";
var fg = "⋚";
var dg = "≦";
var hg = "≶";
var mg = "≶";
var vg = "⪡";
var gg = "≲";
var bg = "⩽";
var Cg = "≲";
var _g = "⥼";
var kg = "⌊";
var xg = "𝔏";
var yg = "𝔩";
var wg = "≶";
var Ag = "⪑";
var Eg = "⥢";
var Dg = "↽";
var Sg = "↼";
var qg = "⥪";
var Tg = "▄";
var Fg = "Љ";
var Lg = "љ";
var Rg = "⇇";
var Og = "≪";
var Pg = "⋘";
var Ig = "⌞";
var Mg = "⇚";
var Bg = "⥫";
var Ng = "◺";
var $g = "Ŀ";
var zg = "ŀ";
var Vg = "⎰";
var jg = "⎰";
var Ug = "⪉";
var Hg = "⪉";
var Gg = "⪇";
var Zg = "≨";
var Wg = "⪇";
var Jg = "≨";
var Kg = "⋦";
var Yg = "⟬";
var Qg = "⇽";
var Xg = "⟦";
var e4 = "⟵";
var t4 = "⟵";
var n4 = "⟸";
var o4 = "⟷";
var r4 = "⟷";
var s4 = "⟺";
var c4 = "⟼";
var i4 = "⟶";
var l4 = "⟶";
var a4 = "⟹";
var u4 = "↫";
var p4 = "↬";
var f4 = "⦅";
var d4 = "𝕃";
var h4 = "𝕝";
var m4 = "⨭";
var v4 = "⨴";
var g4 = "∗";
var b4 = "_";
var C4 = "↙";
var _4 = "↘";
var k4 = "◊";
var x4 = "◊";
var y4 = "⧫";
var w4 = "(";
var A4 = "⦓";
var E4 = "⇆";
var D4 = "⌟";
var S4 = "⇋";
var q4 = "⥭";
var T4 = "‎";
var F4 = "⊿";
var L4 = "‹";
var R4 = "𝓁";
var O4 = "ℒ";
var P4 = "↰";
var I4 = "↰";
var M4 = "≲";
var B4 = "⪍";
var N4 = "⪏";
var $4 = "[";
var z4 = "‘";
var V4 = "‚";
var j4 = "Ł";
var U4 = "ł";
var H4 = "⪦";
var G4 = "⩹";
var Z4 = "<";
var W4 = "<";
var J4 = "≪";
var K4 = "⋖";
var Y4 = "⋋";
var Q4 = "⋉";
var X4 = "⥶";
var e8 = "⩻";
var t8 = "◃";
var n8 = "⊴";
var o8 = "◂";
var r8 = "⦖";
var s8 = "⥊";
var c8 = "⥦";
var i8 = "≨︀";
var l8 = "≨︀";
var a8 = "¯";
var u8 = "♂";
var p8 = "✠";
var f8 = "✠";
var d8 = "↦";
var h8 = "↦";
var m8 = "↧";
var v8 = "↤";
var g8 = "↥";
var b8 = "▮";
var C8 = "⨩";
var _8 = "М";
var k8 = "м";
var x8 = "—";
var y8 = "∺";
var w8 = "∡";
var A8 = " ";
var E8 = "ℳ";
var D8 = "𝔐";
var S8 = "𝔪";
var q8 = "℧";
var T8 = "µ";
var F8 = "*";
var L8 = "⫰";
var R8 = "∣";
var O8 = "·";
var P8 = "⊟";
var I8 = "−";
var M8 = "∸";
var B8 = "⨪";
var N8 = "∓";
var $8 = "⫛";
var z8 = "…";
var V8 = "∓";
var j8 = "⊧";
var U8 = "𝕄";
var H8 = "𝕞";
var G8 = "∓";
var Z8 = "𝓂";
var W8 = "ℳ";
var J8 = "∾";
var K8 = "Μ";
var Y8 = "μ";
var Q8 = "⊸";
var X8 = "⊸";
var e7 = "∇";
var t7 = "Ń";
var n7 = "ń";
var o7 = "∠⃒";
var r7 = "≉";
var s7 = "⩰̸";
var c7 = "≋̸";
var i7 = "ŉ";
var l7 = "≉";
var a7 = "♮";
var u7 = "ℕ";
var p7 = "♮";
var f7 = " ";
var d7 = "≎̸";
var h7 = "≏̸";
var m7 = "⩃";
var v7 = "Ň";
var g7 = "ň";
var b7 = "Ņ";
var C7 = "ņ";
var _7 = "≇";
var k7 = "⩭̸";
var x7 = "⩂";
var y7 = "Н";
var w7 = "н";
var A7 = "–";
var E7 = "⤤";
var D7 = "↗";
var S7 = "⇗";
var q7 = "↗";
var T7 = "≠";
var F7 = "≐̸";
var L7 = "​";
var R7 = "​";
var O7 = "​";
var P7 = "​";
var I7 = "≢";
var M7 = "⤨";
var B7 = "≂̸";
var N7 = "≫";
var $7 = "≪";
var z7 = `
`;
var V7 = "∄";
var j7 = "∄";
var U7 = "𝔑";
var H7 = "𝔫";
var G7 = "≧̸";
var Z7 = "≱";
var W7 = "≱";
var J7 = "≧̸";
var K7 = "⩾̸";
var Y7 = "⩾̸";
var Q7 = "⋙̸";
var X7 = "≵";
var e5 = "≫⃒";
var t5 = "≯";
var n5 = "≯";
var o5 = "≫̸";
var r5 = "↮";
var s5 = "⇎";
var c5 = "⫲";
var i5 = "∋";
var l5 = "⋼";
var a5 = "⋺";
var u5 = "∋";
var p5 = "Њ";
var f5 = "њ";
var d5 = "↚";
var h5 = "⇍";
var m5 = "‥";
var v5 = "≦̸";
var g5 = "≰";
var b5 = "↚";
var C5 = "⇍";
var _5 = "↮";
var k5 = "⇎";
var x5 = "≰";
var y5 = "≦̸";
var w5 = "⩽̸";
var A5 = "⩽̸";
var E5 = "≮";
var D5 = "⋘̸";
var S5 = "≴";
var q5 = "≪⃒";
var T5 = "≮";
var F5 = "⋪";
var L5 = "⋬";
var R5 = "≪̸";
var O5 = "∤";
var P5 = "⁠";
var I5 = " ";
var M5 = "𝕟";
var B5 = "ℕ";
var N5 = "⫬";
var $5 = "¬";
var z5 = "≢";
var V5 = "≭";
var j5 = "∦";
var U5 = "∉";
var H5 = "≠";
var G5 = "≂̸";
var Z5 = "∄";
var W5 = "≯";
var J5 = "≱";
var K5 = "≧̸";
var Y5 = "≫̸";
var Q5 = "≹";
var X5 = "⩾̸";
var e9 = "≵";
var t9 = "≎̸";
var n9 = "≏̸";
var o9 = "∉";
var r9 = "⋵̸";
var s9 = "⋹̸";
var c9 = "∉";
var i9 = "⋷";
var l9 = "⋶";
var a9 = "⧏̸";
var u9 = "⋪";
var p9 = "⋬";
var f9 = "≮";
var d9 = "≰";
var h9 = "≸";
var m9 = "≪̸";
var v9 = "⩽̸";
var g9 = "≴";
var b9 = "⪢̸";
var C9 = "⪡̸";
var _9 = "∌";
var k9 = "∌";
var x9 = "⋾";
var y9 = "⋽";
var w9 = "⊀";
var A9 = "⪯̸";
var E9 = "⋠";
var D9 = "∌";
var S9 = "⧐̸";
var q9 = "⋫";
var T9 = "⋭";
var F9 = "⊏̸";
var L9 = "⋢";
var R9 = "⊐̸";
var O9 = "⋣";
var P9 = "⊂⃒";
var I9 = "⊈";
var M9 = "⊁";
var B9 = "⪰̸";
var N9 = "⋡";
var $9 = "≿̸";
var z9 = "⊃⃒";
var V9 = "⊉";
var j9 = "≁";
var U9 = "≄";
var H9 = "≇";
var G9 = "≉";
var Z9 = "∤";
var W9 = "∦";
var J9 = "∦";
var K9 = "⫽⃥";
var Y9 = "∂̸";
var Q9 = "⨔";
var X9 = "⊀";
var eb = "⋠";
var tb = "⊀";
var nb = "⪯̸";
var ob = "⪯̸";
var rb = "⤳̸";
var sb = "↛";
var cb = "⇏";
var ib = "↝̸";
var lb = "↛";
var ab = "⇏";
var ub = "⋫";
var pb = "⋭";
var fb = "⊁";
var db = "⋡";
var hb = "⪰̸";
var mb = "𝒩";
var vb = "𝓃";
var gb = "∤";
var bb = "∦";
var Cb = "≁";
var _b = "≄";
var kb = "≄";
var xb = "∤";
var yb = "∦";
var wb = "⋢";
var Ab = "⋣";
var Eb = "⊄";
var Db = "⫅̸";
var Sb = "⊈";
var qb = "⊂⃒";
var Tb = "⊈";
var Fb = "⫅̸";
var Lb = "⊁";
var Rb = "⪰̸";
var Ob = "⊅";
var Pb = "⫆̸";
var Ib = "⊉";
var Mb = "⊃⃒";
var Bb = "⊉";
var Nb = "⫆̸";
var $b = "≹";
var zb = "Ñ";
var Vb = "ñ";
var jb = "≸";
var Ub = "⋪";
var Hb = "⋬";
var Gb = "⋫";
var Zb = "⋭";
var Wb = "Ν";
var Jb = "ν";
var Kb = "#";
var Yb = "№";
var Qb = " ";
var Xb = "≍⃒";
var eC = "⊬";
var tC = "⊭";
var nC = "⊮";
var oC = "⊯";
var rC = "≥⃒";
var sC = ">⃒";
var cC = "⤄";
var iC = "⧞";
var lC = "⤂";
var aC = "≤⃒";
var uC = "<⃒";
var pC = "⊴⃒";
var fC = "⤃";
var dC = "⊵⃒";
var hC = "∼⃒";
var mC = "⤣";
var vC = "↖";
var gC = "⇖";
var bC = "↖";
var CC = "⤧";
var _C = "Ó";
var kC = "ó";
var xC = "⊛";
var yC = "Ô";
var wC = "ô";
var AC = "⊚";
var EC = "О";
var DC = "о";
var SC = "⊝";
var qC = "Ő";
var TC = "ő";
var FC = "⨸";
var LC = "⊙";
var RC = "⦼";
var OC = "Œ";
var PC = "œ";
var IC = "⦿";
var MC = "𝔒";
var BC = "𝔬";
var NC = "˛";
var $C = "Ò";
var zC = "ò";
var VC = "⧁";
var jC = "⦵";
var UC = "Ω";
var HC = "∮";
var GC = "↺";
var ZC = "⦾";
var WC = "⦻";
var JC = "‾";
var KC = "⧀";
var YC = "Ō";
var QC = "ō";
var XC = "Ω";
var e_ = "ω";
var t_ = "Ο";
var n_ = "ο";
var o_ = "⦶";
var r_ = "⊖";
var s_ = "𝕆";
var c_ = "𝕠";
var i_ = "⦷";
var l_ = "“";
var a_ = "‘";
var u_ = "⦹";
var p_ = "⊕";
var f_ = "↻";
var d_ = "⩔";
var h_ = "∨";
var m_ = "⩝";
var v_ = "ℴ";
var g_ = "ℴ";
var b_ = "ª";
var C_ = "º";
var __ = "⊶";
var k_ = "⩖";
var x_ = "⩗";
var y_ = "⩛";
var w_ = "Ⓢ";
var A_ = "𝒪";
var E_ = "ℴ";
var D_ = "Ø";
var S_ = "ø";
var q_ = "⊘";
var T_ = "Õ";
var F_ = "õ";
var L_ = "⨶";
var R_ = "⨷";
var O_ = "⊗";
var P_ = "Ö";
var I_ = "ö";
var M_ = "⌽";
var B_ = "‾";
var N_ = "⏞";
var $_ = "⎴";
var z_ = "⏜";
var V_ = "¶";
var j_ = "∥";
var U_ = "∥";
var H_ = "⫳";
var G_ = "⫽";
var Z_ = "∂";
var W_ = "∂";
var J_ = "П";
var K_ = "п";
var Y_ = "%";
var Q_ = ".";
var X_ = "‰";
var ek = "⊥";
var tk = "‱";
var nk = "𝔓";
var ok = "𝔭";
var rk = "Φ";
var sk = "φ";
var ck = "ϕ";
var ik = "ℳ";
var lk = "☎";
var ak = "Π";
var uk = "π";
var pk = "⋔";
var fk = "ϖ";
var dk = "ℏ";
var hk = "ℎ";
var mk = "ℏ";
var vk = "⨣";
var gk = "⊞";
var bk = "⨢";
var Ck = "+";
var _k = "∔";
var kk = "⨥";
var xk = "⩲";
var yk = "±";
var wk = "±";
var Ak = "⨦";
var Ek = "⨧";
var Dk = "±";
var Sk = "ℌ";
var qk = "⨕";
var Tk = "𝕡";
var Fk = "ℙ";
var Lk = "£";
var Rk = "⪷";
var Ok = "⪻";
var Pk = "≺";
var Ik = "≼";
var Mk = "⪷";
var Bk = "≺";
var Nk = "≼";
var $k = "≺";
var zk = "⪯";
var Vk = "≼";
var jk = "≾";
var Uk = "⪯";
var Hk = "⪹";
var Gk = "⪵";
var Zk = "⋨";
var Wk = "⪯";
var Jk = "⪳";
var Kk = "≾";
var Yk = "′";
var Qk = "″";
var Xk = "ℙ";
var ex = "⪹";
var tx = "⪵";
var nx = "⋨";
var ox = "∏";
var rx = "∏";
var sx = "⌮";
var cx = "⌒";
var ix = "⌓";
var lx = "∝";
var ax = "∝";
var ux = "∷";
var px = "∝";
var fx = "≾";
var dx = "⊰";
var hx = "𝒫";
var mx = "𝓅";
var vx = "Ψ";
var gx = "ψ";
var bx = " ";
var Cx = "𝔔";
var _x = "𝔮";
var kx = "⨌";
var xx = "𝕢";
var yx = "ℚ";
var wx = "⁗";
var Ax = "𝒬";
var Ex = "𝓆";
var Dx = "ℍ";
var Sx = "⨖";
var qx = "?";
var Tx = "≟";
var Fx = '"';
var Lx = '"';
var Rx = "⇛";
var Ox = "∽̱";
var Px = "Ŕ";
var Ix = "ŕ";
var Mx = "√";
var Bx = "⦳";
var Nx = "⟩";
var $x = "⟫";
var zx = "⦒";
var Vx = "⦥";
var jx = "⟩";
var Ux = "»";
var Hx = "⥵";
var Gx = "⇥";
var Zx = "⤠";
var Wx = "⤳";
var Jx = "→";
var Kx = "↠";
var Yx = "⇒";
var Qx = "⤞";
var Xx = "↪";
var ey = "↬";
var ty = "⥅";
var ny = "⥴";
var oy = "⤖";
var ry = "↣";
var sy = "↝";
var cy = "⤚";
var iy = "⤜";
var ly = "∶";
var ay = "ℚ";
var uy = "⤍";
var py = "⤏";
var fy = "⤐";
var dy = "❳";
var hy = "}";
var my = "]";
var vy = "⦌";
var gy = "⦎";
var by = "⦐";
var Cy = "Ř";
var _y = "ř";
var ky = "Ŗ";
var xy = "ŗ";
var yy = "⌉";
var wy = "}";
var Ay = "Р";
var Ey = "р";
var Dy = "⤷";
var Sy = "⥩";
var qy = "”";
var Ty = "”";
var Fy = "↳";
var Ly = "ℜ";
var Ry = "ℛ";
var Oy = "ℜ";
var Py = "ℝ";
var Iy = "ℜ";
var My = "▭";
var By = "®";
var Ny = "®";
var $y = "∋";
var zy = "⇋";
var Vy = "⥯";
var jy = "⥽";
var Uy = "⌋";
var Hy = "𝔯";
var Gy = "ℜ";
var Zy = "⥤";
var Wy = "⇁";
var Jy = "⇀";
var Ky = "⥬";
var Yy = "Ρ";
var Qy = "ρ";
var Xy = "ϱ";
var ew = "⟩";
var tw = "⇥";
var nw = "→";
var ow = "→";
var rw = "⇒";
var sw = "⇄";
var cw = "↣";
var iw = "⌉";
var lw = "⟧";
var aw = "⥝";
var uw = "⥕";
var pw = "⇂";
var fw = "⌋";
var dw = "⇁";
var hw = "⇀";
var mw = "⇄";
var vw = "⇌";
var gw = "⇉";
var bw = "↝";
var Cw = "↦";
var _w = "⊢";
var kw = "⥛";
var xw = "⋌";
var yw = "⧐";
var ww = "⊳";
var Aw = "⊵";
var Ew = "⥏";
var Dw = "⥜";
var Sw = "⥔";
var qw = "↾";
var Tw = "⥓";
var Fw = "⇀";
var Lw = "˚";
var Rw = "≓";
var Ow = "⇄";
var Pw = "⇌";
var Iw = "‏";
var Mw = "⎱";
var Bw = "⎱";
var Nw = "⫮";
var $w = "⟭";
var zw = "⇾";
var Vw = "⟧";
var jw = "⦆";
var Uw = "𝕣";
var Hw = "ℝ";
var Gw = "⨮";
var Zw = "⨵";
var Ww = "⥰";
var Jw = ")";
var Kw = "⦔";
var Yw = "⨒";
var Qw = "⇉";
var Xw = "⇛";
var eA = "›";
var tA = "𝓇";
var nA = "ℛ";
var oA = "↱";
var rA = "↱";
var sA = "]";
var cA = "’";
var iA = "’";
var lA = "⋌";
var aA = "⋊";
var uA = "▹";
var pA = "⊵";
var fA = "▸";
var dA = "⧎";
var hA = "⧴";
var mA = "⥨";
var vA = "℞";
var gA = "Ś";
var bA = "ś";
var CA = "‚";
var _A = "⪸";
var kA = "Š";
var xA = "š";
var yA = "⪼";
var wA = "≻";
var AA = "≽";
var EA = "⪰";
var DA = "⪴";
var SA = "Ş";
var qA = "ş";
var TA = "Ŝ";
var FA = "ŝ";
var LA = "⪺";
var RA = "⪶";
var OA = "⋩";
var PA = "⨓";
var IA = "≿";
var MA = "С";
var BA = "с";
var NA = "⊡";
var $A = "⋅";
var zA = "⩦";
var VA = "⤥";
var jA = "↘";
var UA = "⇘";
var HA = "↘";
var GA = "§";
var ZA = ";";
var WA = "⤩";
var JA = "∖";
var KA = "∖";
var YA = "✶";
var QA = "𝔖";
var XA = "𝔰";
var eE = "⌢";
var tE = "♯";
var nE = "Щ";
var oE = "щ";
var rE = "Ш";
var sE = "ш";
var cE = "↓";
var iE = "←";
var lE = "∣";
var aE = "∥";
var uE = "→";
var pE = "↑";
var fE = "­";
var dE = "Σ";
var hE = "σ";
var mE = "ς";
var vE = "ς";
var gE = "∼";
var bE = "⩪";
var CE = "≃";
var _E = "≃";
var kE = "⪞";
var xE = "⪠";
var yE = "⪝";
var wE = "⪟";
var AE = "≆";
var EE = "⨤";
var DE = "⥲";
var SE = "←";
var qE = "∘";
var TE = "∖";
var FE = "⨳";
var LE = "⧤";
var RE = "∣";
var OE = "⌣";
var PE = "⪪";
var IE = "⪬";
var ME = "⪬︀";
var BE = "Ь";
var NE = "ь";
var $E = "⌿";
var zE = "⧄";
var VE = "/";
var jE = "𝕊";
var UE = "𝕤";
var HE = "♠";
var GE = "♠";
var ZE = "∥";
var WE = "⊓";
var JE = "⊓︀";
var KE = "⊔";
var YE = "⊔︀";
var QE = "√";
var XE = "⊏";
var eD = "⊑";
var tD = "⊏";
var nD = "⊑";
var oD = "⊐";
var rD = "⊒";
var sD = "⊐";
var cD = "⊒";
var iD = "□";
var lD = "□";
var aD = "⊓";
var uD = "⊏";
var pD = "⊑";
var fD = "⊐";
var dD = "⊒";
var hD = "⊔";
var mD = "▪";
var vD = "□";
var gD = "▪";
var bD = "→";
var CD = "𝒮";
var _D = "𝓈";
var kD = "∖";
var xD = "⌣";
var yD = "⋆";
var wD = "⋆";
var AD = "☆";
var ED = "★";
var DD = "ϵ";
var SD = "ϕ";
var qD = "¯";
var TD = "⊂";
var FD = "⋐";
var LD = "⪽";
var RD = "⫅";
var OD = "⊆";
var PD = "⫃";
var ID = "⫁";
var MD = "⫋";
var BD = "⊊";
var ND = "⪿";
var $D = "⥹";
var zD = "⊂";
var VD = "⋐";
var jD = "⊆";
var UD = "⫅";
var HD = "⊆";
var GD = "⊊";
var ZD = "⫋";
var WD = "⫇";
var JD = "⫕";
var KD = "⫓";
var YD = "⪸";
var QD = "≻";
var XD = "≽";
var eS = "≻";
var tS = "⪰";
var nS = "≽";
var oS = "≿";
var rS = "⪰";
var sS = "⪺";
var cS = "⪶";
var iS = "⋩";
var lS = "≿";
var aS = "∋";
var uS = "∑";
var pS = "∑";
var fS = "♪";
var dS = "¹";
var hS = "²";
var mS = "³";
var vS = "⊃";
var gS = "⋑";
var bS = "⪾";
var CS = "⫘";
var _S = "⫆";
var kS = "⊇";
var xS = "⫄";
var yS = "⊃";
var wS = "⊇";
var AS = "⟉";
var ES = "⫗";
var DS = "⥻";
var SS = "⫂";
var qS = "⫌";
var TS = "⊋";
var FS = "⫀";
var LS = "⊃";
var RS = "⋑";
var OS = "⊇";
var PS = "⫆";
var IS = "⊋";
var MS = "⫌";
var BS = "⫈";
var NS = "⫔";
var $S = "⫖";
var zS = "⤦";
var VS = "↙";
var jS = "⇙";
var US = "↙";
var HS = "⤪";
var GS = "ß";
var ZS = "	";
var WS = "⌖";
var JS = "Τ";
var KS = "τ";
var YS = "⎴";
var QS = "Ť";
var XS = "ť";
var eq = "Ţ";
var tq = "ţ";
var nq = "Т";
var oq = "т";
var rq = "⃛";
var sq = "⌕";
var cq = "𝔗";
var iq = "𝔱";
var lq = "∴";
var aq = "∴";
var uq = "∴";
var pq = "Θ";
var fq = "θ";
var dq = "ϑ";
var hq = "ϑ";
var mq = "≈";
var vq = "∼";
var gq = "  ";
var bq = " ";
var Cq = " ";
var _q = "≈";
var kq = "∼";
var xq = "Þ";
var yq = "þ";
var wq = "˜";
var Aq = "∼";
var Eq = "≃";
var Dq = "≅";
var Sq = "≈";
var qq = "⨱";
var Tq = "⊠";
var Fq = "×";
var Lq = "⨰";
var Rq = "∭";
var Oq = "⤨";
var Pq = "⌶";
var Iq = "⫱";
var Mq = "⊤";
var Bq = "𝕋";
var Nq = "𝕥";
var $q = "⫚";
var zq = "⤩";
var Vq = "‴";
var jq = "™";
var Uq = "™";
var Hq = "▵";
var Gq = "▿";
var Zq = "◃";
var Wq = "⊴";
var Jq = "≜";
var Kq = "▹";
var Yq = "⊵";
var Qq = "◬";
var Xq = "≜";
var eT = "⨺";
var tT = "⃛";
var nT = "⨹";
var oT = "⧍";
var rT = "⨻";
var sT = "⏢";
var cT = "𝒯";
var iT = "𝓉";
var lT = "Ц";
var aT = "ц";
var uT = "Ћ";
var pT = "ћ";
var fT = "Ŧ";
var dT = "ŧ";
var hT = "≬";
var mT = "↞";
var vT = "↠";
var gT = "Ú";
var bT = "ú";
var CT = "↑";
var _T = "↟";
var kT = "⇑";
var xT = "⥉";
var yT = "Ў";
var wT = "ў";
var AT = "Ŭ";
var ET = "ŭ";
var DT = "Û";
var ST = "û";
var qT = "У";
var TT = "у";
var FT = "⇅";
var LT = "Ű";
var RT = "ű";
var OT = "⥮";
var PT = "⥾";
var IT = "𝔘";
var MT = "𝔲";
var BT = "Ù";
var NT = "ù";
var $T = "⥣";
var zT = "↿";
var VT = "↾";
var jT = "▀";
var UT = "⌜";
var HT = "⌜";
var GT = "⌏";
var ZT = "◸";
var WT = "Ū";
var JT = "ū";
var KT = "¨";
var YT = "_";
var QT = "⏟";
var XT = "⎵";
var eF = "⏝";
var tF = "⋃";
var nF = "⊎";
var oF = "Ų";
var rF = "ų";
var sF = "𝕌";
var cF = "𝕦";
var iF = "⤒";
var lF = "↑";
var aF = "↑";
var uF = "⇑";
var pF = "⇅";
var fF = "↕";
var dF = "↕";
var hF = "⇕";
var mF = "⥮";
var vF = "↿";
var gF = "↾";
var bF = "⊎";
var CF = "↖";
var _F = "↗";
var kF = "υ";
var xF = "ϒ";
var yF = "ϒ";
var wF = "Υ";
var AF = "υ";
var EF = "↥";
var DF = "⊥";
var SF = "⇈";
var qF = "⌝";
var TF = "⌝";
var FF = "⌎";
var LF = "Ů";
var RF = "ů";
var OF = "◹";
var PF = "𝒰";
var IF = "𝓊";
var MF = "⋰";
var BF = "Ũ";
var NF = "ũ";
var $F = "▵";
var zF = "▴";
var VF = "⇈";
var jF = "Ü";
var UF = "ü";
var HF = "⦧";
var GF = "⦜";
var ZF = "ϵ";
var WF = "ϰ";
var JF = "∅";
var KF = "ϕ";
var YF = "ϖ";
var QF = "∝";
var XF = "↕";
var eL = "⇕";
var tL = "ϱ";
var nL = "ς";
var oL = "⊊︀";
var rL = "⫋︀";
var sL = "⊋︀";
var cL = "⫌︀";
var iL = "ϑ";
var lL = "⊲";
var aL = "⊳";
var uL = "⫨";
var pL = "⫫";
var fL = "⫩";
var dL = "В";
var hL = "в";
var mL = "⊢";
var vL = "⊨";
var gL = "⊩";
var bL = "⊫";
var CL = "⫦";
var _L = "⊻";
var kL = "∨";
var xL = "⋁";
var yL = "≚";
var wL = "⋮";
var AL = "|";
var EL = "‖";
var DL = "|";
var SL = "‖";
var qL = "∣";
var TL = "|";
var FL = "❘";
var LL = "≀";
var RL = " ";
var OL = "𝔙";
var PL = "𝔳";
var IL = "⊲";
var ML = "⊂⃒";
var BL = "⊃⃒";
var NL = "𝕍";
var $L = "𝕧";
var zL = "∝";
var VL = "⊳";
var jL = "𝒱";
var UL = "𝓋";
var HL = "⫋︀";
var GL = "⊊︀";
var ZL = "⫌︀";
var WL = "⊋︀";
var JL = "⊪";
var KL = "⦚";
var YL = "Ŵ";
var QL = "ŵ";
var XL = "⩟";
var eR = "∧";
var tR = "⋀";
var nR = "≙";
var oR = "℘";
var rR = "𝔚";
var sR = "𝔴";
var cR = "𝕎";
var iR = "𝕨";
var lR = "℘";
var aR = "≀";
var uR = "≀";
var pR = "𝒲";
var fR = "𝓌";
var dR = "⋂";
var hR = "◯";
var mR = "⋃";
var vR = "▽";
var gR = "𝔛";
var bR = "𝔵";
var CR = "⟷";
var _R = "⟺";
var kR = "Ξ";
var xR = "ξ";
var yR = "⟵";
var wR = "⟸";
var AR = "⟼";
var ER = "⋻";
var DR = "⨀";
var SR = "𝕏";
var qR = "𝕩";
var TR = "⨁";
var FR = "⨂";
var LR = "⟶";
var RR = "⟹";
var OR = "𝒳";
var PR = "𝓍";
var IR = "⨆";
var MR = "⨄";
var BR = "△";
var NR = "⋁";
var $R = "⋀";
var zR = "Ý";
var VR = "ý";
var jR = "Я";
var UR = "я";
var HR = "Ŷ";
var GR = "ŷ";
var ZR = "Ы";
var WR = "ы";
var JR = "¥";
var KR = "𝔜";
var YR = "𝔶";
var QR = "Ї";
var XR = "ї";
var eO = "𝕐";
var tO = "𝕪";
var nO = "𝒴";
var oO = "𝓎";
var rO = "Ю";
var sO = "ю";
var cO = "ÿ";
var iO = "Ÿ";
var lO = "Ź";
var aO = "ź";
var uO = "Ž";
var pO = "ž";
var fO = "З";
var dO = "з";
var hO = "Ż";
var mO = "ż";
var vO = "ℨ";
var gO = "​";
var bO = "Ζ";
var CO = "ζ";
var _O = "𝔷";
var kO = "ℨ";
var xO = "Ж";
var yO = "ж";
var wO = "⇝";
var AO = "𝕫";
var EO = "ℤ";
var DO = "𝒵";
var SO = "𝓏";
var qO = "‍";
var TO = "‌";
var FO = {
  Aacute: ds,
  aacute: hs,
  Abreve: ms,
  abreve: vs,
  ac: gs,
  acd: bs,
  acE: Cs,
  Acirc: _s,
  acirc: ks,
  acute: xs,
  Acy: ys,
  acy: ws,
  AElig: As,
  aelig: Es,
  af: Ds,
  Afr: Ss,
  afr: qs,
  Agrave: Ts,
  agrave: Fs,
  alefsym: Ls,
  aleph: Rs,
  Alpha: Os,
  alpha: Ps,
  Amacr: Is,
  amacr: Ms,
  amalg: Bs,
  amp: Ns,
  AMP: $s,
  andand: zs,
  And: Vs,
  and: js,
  andd: Us,
  andslope: Hs,
  andv: Gs,
  ang: Zs,
  ange: Ws,
  angle: Js,
  angmsdaa: Ks,
  angmsdab: Ys,
  angmsdac: Qs,
  angmsdad: Xs,
  angmsdae: ec,
  angmsdaf: tc,
  angmsdag: nc,
  angmsdah: oc,
  angmsd: rc,
  angrt: sc,
  angrtvb: cc,
  angrtvbd: ic,
  angsph: lc,
  angst: ac,
  angzarr: uc,
  Aogon: pc,
  aogon: fc,
  Aopf: dc,
  aopf: hc,
  apacir: mc,
  ap: vc,
  apE: gc,
  ape: bc,
  apid: Cc,
  apos: _c,
  ApplyFunction: kc,
  approx: xc,
  approxeq: yc,
  Aring: wc,
  aring: Ac,
  Ascr: Ec,
  ascr: Dc,
  Assign: Sc,
  ast: qc,
  asymp: Tc,
  asympeq: Fc,
  Atilde: Lc,
  atilde: Rc,
  Auml: Oc,
  auml: Pc,
  awconint: Ic,
  awint: Mc,
  backcong: Bc,
  backepsilon: Nc,
  backprime: $c,
  backsim: zc,
  backsimeq: Vc,
  Backslash: jc,
  Barv: Uc,
  barvee: Hc,
  barwed: Gc,
  Barwed: Zc,
  barwedge: Wc,
  bbrk: Jc,
  bbrktbrk: Kc,
  bcong: Yc,
  Bcy: Qc,
  bcy: Xc,
  bdquo: ei,
  becaus: ti,
  because: ni,
  Because: oi,
  bemptyv: ri,
  bepsi: si,
  bernou: ci,
  Bernoullis: ii,
  Beta: li,
  beta: ai,
  beth: ui,
  between: pi,
  Bfr: fi,
  bfr: di,
  bigcap: hi,
  bigcirc: mi,
  bigcup: vi,
  bigodot: gi,
  bigoplus: bi,
  bigotimes: Ci,
  bigsqcup: _i,
  bigstar: ki,
  bigtriangledown: xi,
  bigtriangleup: yi,
  biguplus: wi,
  bigvee: Ai,
  bigwedge: Ei,
  bkarow: Di,
  blacklozenge: Si,
  blacksquare: qi,
  blacktriangle: Ti,
  blacktriangledown: Fi,
  blacktriangleleft: Li,
  blacktriangleright: Ri,
  blank: Oi,
  blk12: Pi,
  blk14: Ii,
  blk34: Mi,
  block: Bi,
  bne: Ni,
  bnequiv: $i,
  bNot: zi,
  bnot: Vi,
  Bopf: ji,
  bopf: Ui,
  bot: Hi,
  bottom: Gi,
  bowtie: Zi,
  boxbox: Wi,
  boxdl: Ji,
  boxdL: Ki,
  boxDl: Yi,
  boxDL: Qi,
  boxdr: Xi,
  boxdR: el,
  boxDr: tl,
  boxDR: nl,
  boxh: ol,
  boxH: rl,
  boxhd: sl,
  boxHd: cl,
  boxhD: il,
  boxHD: ll,
  boxhu: al,
  boxHu: ul,
  boxhU: pl,
  boxHU: fl,
  boxminus: dl,
  boxplus: hl,
  boxtimes: ml,
  boxul: vl,
  boxuL: gl,
  boxUl: bl,
  boxUL: Cl,
  boxur: _l,
  boxuR: kl,
  boxUr: xl,
  boxUR: yl,
  boxv: wl,
  boxV: Al,
  boxvh: El,
  boxvH: Dl,
  boxVh: Sl,
  boxVH: ql,
  boxvl: Tl,
  boxvL: Fl,
  boxVl: Ll,
  boxVL: Rl,
  boxvr: Ol,
  boxvR: Pl,
  boxVr: Il,
  boxVR: Ml,
  bprime: Bl,
  breve: Nl,
  Breve: $l,
  brvbar: zl,
  bscr: Vl,
  Bscr: jl,
  bsemi: Ul,
  bsim: Hl,
  bsime: Gl,
  bsolb: Zl,
  bsol: Wl,
  bsolhsub: Jl,
  bull: Kl,
  bullet: Yl,
  bump: Ql,
  bumpE: Xl,
  bumpe: ea,
  Bumpeq: ta,
  bumpeq: na,
  Cacute: oa,
  cacute: ra,
  capand: sa,
  capbrcup: ca,
  capcap: ia,
  cap: la,
  Cap: aa,
  capcup: ua,
  capdot: pa,
  CapitalDifferentialD: fa,
  caps: da,
  caret: ha,
  caron: ma,
  Cayleys: va,
  ccaps: ga,
  Ccaron: ba,
  ccaron: Ca,
  Ccedil: _a,
  ccedil: ka,
  Ccirc: xa,
  ccirc: ya,
  Cconint: wa,
  ccups: Aa,
  ccupssm: Ea,
  Cdot: Da,
  cdot: Sa,
  cedil: qa,
  Cedilla: Ta,
  cemptyv: Fa,
  cent: La,
  centerdot: Ra,
  CenterDot: Oa,
  cfr: Pa,
  Cfr: Ia,
  CHcy: Ma,
  chcy: Ba,
  check: Na,
  checkmark: $a,
  Chi: za,
  chi: Va,
  circ: ja,
  circeq: Ua,
  circlearrowleft: Ha,
  circlearrowright: Ga,
  circledast: Za,
  circledcirc: Wa,
  circleddash: Ja,
  CircleDot: Ka,
  circledR: Ya,
  circledS: Qa,
  CircleMinus: Xa,
  CirclePlus: eu,
  CircleTimes: tu,
  cir: nu,
  cirE: ou,
  cire: ru,
  cirfnint: su,
  cirmid: cu,
  cirscir: iu,
  ClockwiseContourIntegral: lu,
  CloseCurlyDoubleQuote: au,
  CloseCurlyQuote: uu,
  clubs: pu,
  clubsuit: fu,
  colon: du,
  Colon: hu,
  Colone: mu,
  colone: vu,
  coloneq: gu,
  comma: bu,
  commat: Cu,
  comp: _u,
  compfn: ku,
  complement: xu,
  complexes: yu,
  cong: wu,
  congdot: Au,
  Congruent: Eu,
  conint: Du,
  Conint: Su,
  ContourIntegral: qu,
  copf: Tu,
  Copf: Fu,
  coprod: Lu,
  Coproduct: Ru,
  copy: Ou,
  COPY: Pu,
  copysr: Iu,
  CounterClockwiseContourIntegral: Mu,
  crarr: Bu,
  cross: Nu,
  Cross: $u,
  Cscr: zu,
  cscr: Vu,
  csub: ju,
  csube: Uu,
  csup: Hu,
  csupe: Gu,
  ctdot: Zu,
  cudarrl: Wu,
  cudarrr: Ju,
  cuepr: Ku,
  cuesc: Yu,
  cularr: Qu,
  cularrp: Xu,
  cupbrcap: e1,
  cupcap: t1,
  CupCap: n1,
  cup: o1,
  Cup: r1,
  cupcup: s1,
  cupdot: c1,
  cupor: i1,
  cups: l1,
  curarr: a1,
  curarrm: u1,
  curlyeqprec: p1,
  curlyeqsucc: f1,
  curlyvee: d1,
  curlywedge: h1,
  curren: m1,
  curvearrowleft: v1,
  curvearrowright: g1,
  cuvee: b1,
  cuwed: C1,
  cwconint: _1,
  cwint: k1,
  cylcty: x1,
  dagger: y1,
  Dagger: w1,
  daleth: A1,
  darr: E1,
  Darr: D1,
  dArr: S1,
  dash: q1,
  Dashv: T1,
  dashv: F1,
  dbkarow: L1,
  dblac: R1,
  Dcaron: O1,
  dcaron: P1,
  Dcy: I1,
  dcy: M1,
  ddagger: B1,
  ddarr: N1,
  DD: $1,
  dd: z1,
  DDotrahd: V1,
  ddotseq: j1,
  deg: U1,
  Del: H1,
  Delta: G1,
  delta: Z1,
  demptyv: W1,
  dfisht: J1,
  Dfr: K1,
  dfr: Y1,
  dHar: Q1,
  dharl: X1,
  dharr: ep,
  DiacriticalAcute: tp,
  DiacriticalDot: np,
  DiacriticalDoubleAcute: op,
  DiacriticalGrave: rp,
  DiacriticalTilde: sp,
  diam: cp,
  diamond: ip,
  Diamond: lp,
  diamondsuit: ap,
  diams: up,
  die: pp,
  DifferentialD: fp,
  digamma: dp,
  disin: hp,
  div: mp,
  divide: vp,
  divideontimes: gp,
  divonx: bp,
  DJcy: Cp,
  djcy: _p,
  dlcorn: kp,
  dlcrop: xp,
  dollar: yp,
  Dopf: wp,
  dopf: Ap,
  Dot: Ep,
  dot: Dp,
  DotDot: Sp,
  doteq: qp,
  doteqdot: Tp,
  DotEqual: Fp,
  dotminus: Lp,
  dotplus: Rp,
  dotsquare: Op,
  doublebarwedge: Pp,
  DoubleContourIntegral: Ip,
  DoubleDot: Mp,
  DoubleDownArrow: Bp,
  DoubleLeftArrow: Np,
  DoubleLeftRightArrow: $p,
  DoubleLeftTee: zp,
  DoubleLongLeftArrow: Vp,
  DoubleLongLeftRightArrow: jp,
  DoubleLongRightArrow: Up,
  DoubleRightArrow: Hp,
  DoubleRightTee: Gp,
  DoubleUpArrow: Zp,
  DoubleUpDownArrow: Wp,
  DoubleVerticalBar: Jp,
  DownArrowBar: Kp,
  downarrow: Yp,
  DownArrow: Qp,
  Downarrow: Xp,
  DownArrowUpArrow: ef,
  DownBreve: tf,
  downdownarrows: nf,
  downharpoonleft: of,
  downharpoonright: rf,
  DownLeftRightVector: sf,
  DownLeftTeeVector: cf,
  DownLeftVectorBar: lf,
  DownLeftVector: af,
  DownRightTeeVector: uf,
  DownRightVectorBar: pf,
  DownRightVector: ff,
  DownTeeArrow: df,
  DownTee: hf,
  drbkarow: mf,
  drcorn: vf,
  drcrop: gf,
  Dscr: bf,
  dscr: Cf,
  DScy: _f,
  dscy: kf,
  dsol: xf,
  Dstrok: yf,
  dstrok: wf,
  dtdot: Af,
  dtri: Ef,
  dtrif: Df,
  duarr: Sf,
  duhar: qf,
  dwangle: Tf,
  DZcy: Ff,
  dzcy: Lf,
  dzigrarr: Rf,
  Eacute: Of,
  eacute: Pf,
  easter: If,
  Ecaron: Mf,
  ecaron: Bf,
  Ecirc: Nf,
  ecirc: $f,
  ecir: zf,
  ecolon: Vf,
  Ecy: jf,
  ecy: Uf,
  eDDot: Hf,
  Edot: Gf,
  edot: Zf,
  eDot: Wf,
  ee: Jf,
  efDot: Kf,
  Efr: Yf,
  efr: Qf,
  eg: Xf,
  Egrave: ed,
  egrave: td,
  egs: nd,
  egsdot: od,
  el: rd,
  Element: sd,
  elinters: cd,
  ell: id,
  els: ld,
  elsdot: ad,
  Emacr: ud,
  emacr: pd,
  empty: fd,
  emptyset: dd,
  EmptySmallSquare: hd,
  emptyv: md,
  EmptyVerySmallSquare: vd,
  emsp13: gd,
  emsp14: bd,
  emsp: Cd,
  ENG: _d,
  eng: kd,
  ensp: xd,
  Eogon: yd,
  eogon: wd,
  Eopf: Ad,
  eopf: Ed,
  epar: Dd,
  eparsl: Sd,
  eplus: qd,
  epsi: Td,
  Epsilon: Fd,
  epsilon: Ld,
  epsiv: Rd,
  eqcirc: Od,
  eqcolon: Pd,
  eqsim: Id,
  eqslantgtr: Md,
  eqslantless: Bd,
  Equal: Nd,
  equals: $d,
  EqualTilde: zd,
  equest: Vd,
  Equilibrium: jd,
  equiv: Ud,
  equivDD: Hd,
  eqvparsl: Gd,
  erarr: Zd,
  erDot: Wd,
  escr: Jd,
  Escr: Kd,
  esdot: Yd,
  Esim: Qd,
  esim: Xd,
  Eta: e2,
  eta: t2,
  ETH: n2,
  eth: o2,
  Euml: r2,
  euml: s2,
  euro: c2,
  excl: i2,
  exist: l2,
  Exists: a2,
  expectation: u2,
  exponentiale: p2,
  ExponentialE: f2,
  fallingdotseq: d2,
  Fcy: h2,
  fcy: m2,
  female: v2,
  ffilig: g2,
  fflig: b2,
  ffllig: C2,
  Ffr: _2,
  ffr: k2,
  filig: x2,
  FilledSmallSquare: y2,
  FilledVerySmallSquare: w2,
  fjlig: A2,
  flat: E2,
  fllig: D2,
  fltns: S2,
  fnof: q2,
  Fopf: T2,
  fopf: F2,
  forall: L2,
  ForAll: R2,
  fork: O2,
  forkv: P2,
  Fouriertrf: I2,
  fpartint: M2,
  frac12: B2,
  frac13: N2,
  frac14: $2,
  frac15: z2,
  frac16: V2,
  frac18: j2,
  frac23: U2,
  frac25: H2,
  frac34: G2,
  frac35: Z2,
  frac38: W2,
  frac45: J2,
  frac56: K2,
  frac58: Y2,
  frac78: Q2,
  frasl: X2,
  frown: e0,
  fscr: t0,
  Fscr: n0,
  gacute: o0,
  Gamma: r0,
  gamma: s0,
  Gammad: c0,
  gammad: i0,
  gap: l0,
  Gbreve: a0,
  gbreve: u0,
  Gcedil: p0,
  Gcirc: f0,
  gcirc: d0,
  Gcy: h0,
  gcy: m0,
  Gdot: v0,
  gdot: g0,
  ge: b0,
  gE: C0,
  gEl: _0,
  gel: k0,
  geq: x0,
  geqq: y0,
  geqslant: w0,
  gescc: A0,
  ges: E0,
  gesdot: D0,
  gesdoto: S0,
  gesdotol: q0,
  gesl: T0,
  gesles: F0,
  Gfr: L0,
  gfr: R0,
  gg: O0,
  Gg: P0,
  ggg: I0,
  gimel: M0,
  GJcy: B0,
  gjcy: N0,
  gla: $0,
  gl: z0,
  glE: V0,
  glj: j0,
  gnap: U0,
  gnapprox: H0,
  gne: G0,
  gnE: Z0,
  gneq: W0,
  gneqq: J0,
  gnsim: K0,
  Gopf: Y0,
  gopf: Q0,
  grave: X0,
  GreaterEqual: eh,
  GreaterEqualLess: th,
  GreaterFullEqual: nh,
  GreaterGreater: oh,
  GreaterLess: rh,
  GreaterSlantEqual: sh,
  GreaterTilde: ch,
  Gscr: ih,
  gscr: lh,
  gsim: ah,
  gsime: uh,
  gsiml: ph,
  gtcc: fh,
  gtcir: dh,
  gt: hh,
  GT: mh,
  Gt: vh,
  gtdot: gh,
  gtlPar: bh,
  gtquest: Ch,
  gtrapprox: _h,
  gtrarr: kh,
  gtrdot: xh,
  gtreqless: yh,
  gtreqqless: wh,
  gtrless: Ah,
  gtrsim: Eh,
  gvertneqq: Dh,
  gvnE: Sh,
  Hacek: qh,
  hairsp: Th,
  half: Fh,
  hamilt: Lh,
  HARDcy: Rh,
  hardcy: Oh,
  harrcir: Ph,
  harr: Ih,
  hArr: Mh,
  harrw: Bh,
  Hat: Nh,
  hbar: $h,
  Hcirc: zh,
  hcirc: Vh,
  hearts: jh,
  heartsuit: Uh,
  hellip: Hh,
  hercon: Gh,
  hfr: Zh,
  Hfr: Wh,
  HilbertSpace: Jh,
  hksearow: Kh,
  hkswarow: Yh,
  hoarr: Qh,
  homtht: Xh,
  hookleftarrow: e3,
  hookrightarrow: t3,
  hopf: n3,
  Hopf: o3,
  horbar: r3,
  HorizontalLine: s3,
  hscr: c3,
  Hscr: i3,
  hslash: l3,
  Hstrok: a3,
  hstrok: u3,
  HumpDownHump: p3,
  HumpEqual: f3,
  hybull: d3,
  hyphen: h3,
  Iacute: m3,
  iacute: v3,
  ic: g3,
  Icirc: b3,
  icirc: C3,
  Icy: _3,
  icy: k3,
  Idot: x3,
  IEcy: y3,
  iecy: w3,
  iexcl: A3,
  iff: E3,
  ifr: D3,
  Ifr: S3,
  Igrave: q3,
  igrave: T3,
  ii: F3,
  iiiint: L3,
  iiint: R3,
  iinfin: O3,
  iiota: P3,
  IJlig: I3,
  ijlig: M3,
  Imacr: B3,
  imacr: N3,
  image: $3,
  ImaginaryI: z3,
  imagline: V3,
  imagpart: j3,
  imath: U3,
  Im: H3,
  imof: G3,
  imped: Z3,
  Implies: W3,
  incare: J3,
  in: "∈",
  infin: K3,
  infintie: Y3,
  inodot: Q3,
  intcal: X3,
  int: em,
  Int: tm,
  integers: nm,
  Integral: om,
  intercal: rm,
  Intersection: sm,
  intlarhk: cm,
  intprod: im,
  InvisibleComma: lm,
  InvisibleTimes: am,
  IOcy: um,
  iocy: pm,
  Iogon: fm,
  iogon: dm,
  Iopf: hm,
  iopf: mm,
  Iota: vm,
  iota: gm,
  iprod: bm,
  iquest: Cm,
  iscr: _m,
  Iscr: km,
  isin: xm,
  isindot: ym,
  isinE: wm,
  isins: Am,
  isinsv: Em,
  isinv: Dm,
  it: Sm,
  Itilde: qm,
  itilde: Tm,
  Iukcy: Fm,
  iukcy: Lm,
  Iuml: Rm,
  iuml: Om,
  Jcirc: Pm,
  jcirc: Im,
  Jcy: Mm,
  jcy: Bm,
  Jfr: Nm,
  jfr: $m,
  jmath: zm,
  Jopf: Vm,
  jopf: jm,
  Jscr: Um,
  jscr: Hm,
  Jsercy: Gm,
  jsercy: Zm,
  Jukcy: Wm,
  jukcy: Jm,
  Kappa: Km,
  kappa: Ym,
  kappav: Qm,
  Kcedil: Xm,
  kcedil: ev,
  Kcy: tv,
  kcy: nv,
  Kfr: ov,
  kfr: rv,
  kgreen: sv,
  KHcy: cv,
  khcy: iv,
  KJcy: lv,
  kjcy: av,
  Kopf: uv,
  kopf: pv,
  Kscr: fv,
  kscr: dv,
  lAarr: hv,
  Lacute: mv,
  lacute: vv,
  laemptyv: gv,
  lagran: bv,
  Lambda: Cv,
  lambda: _v,
  lang: kv,
  Lang: xv,
  langd: yv,
  langle: wv,
  lap: Av,
  Laplacetrf: Ev,
  laquo: Dv,
  larrb: Sv,
  larrbfs: qv,
  larr: Tv,
  Larr: Fv,
  lArr: Lv,
  larrfs: Rv,
  larrhk: Ov,
  larrlp: Pv,
  larrpl: Iv,
  larrsim: Mv,
  larrtl: Bv,
  latail: Nv,
  lAtail: $v,
  lat: zv,
  late: Vv,
  lates: jv,
  lbarr: Uv,
  lBarr: Hv,
  lbbrk: Gv,
  lbrace: Zv,
  lbrack: Wv,
  lbrke: Jv,
  lbrksld: Kv,
  lbrkslu: Yv,
  Lcaron: Qv,
  lcaron: Xv,
  Lcedil: e6,
  lcedil: t6,
  lceil: n6,
  lcub: o6,
  Lcy: r6,
  lcy: s6,
  ldca: c6,
  ldquo: i6,
  ldquor: l6,
  ldrdhar: a6,
  ldrushar: u6,
  ldsh: p6,
  le: f6,
  lE: d6,
  LeftAngleBracket: h6,
  LeftArrowBar: m6,
  leftarrow: v6,
  LeftArrow: g6,
  Leftarrow: b6,
  LeftArrowRightArrow: C6,
  leftarrowtail: _6,
  LeftCeiling: k6,
  LeftDoubleBracket: x6,
  LeftDownTeeVector: y6,
  LeftDownVectorBar: w6,
  LeftDownVector: A6,
  LeftFloor: E6,
  leftharpoondown: D6,
  leftharpoonup: S6,
  leftleftarrows: q6,
  leftrightarrow: T6,
  LeftRightArrow: F6,
  Leftrightarrow: L6,
  leftrightarrows: R6,
  leftrightharpoons: O6,
  leftrightsquigarrow: P6,
  LeftRightVector: I6,
  LeftTeeArrow: M6,
  LeftTee: B6,
  LeftTeeVector: N6,
  leftthreetimes: $6,
  LeftTriangleBar: z6,
  LeftTriangle: V6,
  LeftTriangleEqual: j6,
  LeftUpDownVector: U6,
  LeftUpTeeVector: H6,
  LeftUpVectorBar: G6,
  LeftUpVector: Z6,
  LeftVectorBar: W6,
  LeftVector: J6,
  lEg: K6,
  leg: Y6,
  leq: Q6,
  leqq: X6,
  leqslant: eg,
  lescc: tg,
  les: ng,
  lesdot: og,
  lesdoto: rg,
  lesdotor: sg,
  lesg: cg,
  lesges: ig,
  lessapprox: lg,
  lessdot: ag,
  lesseqgtr: ug,
  lesseqqgtr: pg,
  LessEqualGreater: fg,
  LessFullEqual: dg,
  LessGreater: hg,
  lessgtr: mg,
  LessLess: vg,
  lesssim: gg,
  LessSlantEqual: bg,
  LessTilde: Cg,
  lfisht: _g,
  lfloor: kg,
  Lfr: xg,
  lfr: yg,
  lg: wg,
  lgE: Ag,
  lHar: Eg,
  lhard: Dg,
  lharu: Sg,
  lharul: qg,
  lhblk: Tg,
  LJcy: Fg,
  ljcy: Lg,
  llarr: Rg,
  ll: Og,
  Ll: Pg,
  llcorner: Ig,
  Lleftarrow: Mg,
  llhard: Bg,
  lltri: Ng,
  Lmidot: $g,
  lmidot: zg,
  lmoustache: Vg,
  lmoust: jg,
  lnap: Ug,
  lnapprox: Hg,
  lne: Gg,
  lnE: Zg,
  lneq: Wg,
  lneqq: Jg,
  lnsim: Kg,
  loang: Yg,
  loarr: Qg,
  lobrk: Xg,
  longleftarrow: e4,
  LongLeftArrow: t4,
  Longleftarrow: n4,
  longleftrightarrow: o4,
  LongLeftRightArrow: r4,
  Longleftrightarrow: s4,
  longmapsto: c4,
  longrightarrow: i4,
  LongRightArrow: l4,
  Longrightarrow: a4,
  looparrowleft: u4,
  looparrowright: p4,
  lopar: f4,
  Lopf: d4,
  lopf: h4,
  loplus: m4,
  lotimes: v4,
  lowast: g4,
  lowbar: b4,
  LowerLeftArrow: C4,
  LowerRightArrow: _4,
  loz: k4,
  lozenge: x4,
  lozf: y4,
  lpar: w4,
  lparlt: A4,
  lrarr: E4,
  lrcorner: D4,
  lrhar: S4,
  lrhard: q4,
  lrm: T4,
  lrtri: F4,
  lsaquo: L4,
  lscr: R4,
  Lscr: O4,
  lsh: P4,
  Lsh: I4,
  lsim: M4,
  lsime: B4,
  lsimg: N4,
  lsqb: $4,
  lsquo: z4,
  lsquor: V4,
  Lstrok: j4,
  lstrok: U4,
  ltcc: H4,
  ltcir: G4,
  lt: Z4,
  LT: W4,
  Lt: J4,
  ltdot: K4,
  lthree: Y4,
  ltimes: Q4,
  ltlarr: X4,
  ltquest: e8,
  ltri: t8,
  ltrie: n8,
  ltrif: o8,
  ltrPar: r8,
  lurdshar: s8,
  luruhar: c8,
  lvertneqq: i8,
  lvnE: l8,
  macr: a8,
  male: u8,
  malt: p8,
  maltese: f8,
  Map: "⤅",
  map: d8,
  mapsto: h8,
  mapstodown: m8,
  mapstoleft: v8,
  mapstoup: g8,
  marker: b8,
  mcomma: C8,
  Mcy: _8,
  mcy: k8,
  mdash: x8,
  mDDot: y8,
  measuredangle: w8,
  MediumSpace: A8,
  Mellintrf: E8,
  Mfr: D8,
  mfr: S8,
  mho: q8,
  micro: T8,
  midast: F8,
  midcir: L8,
  mid: R8,
  middot: O8,
  minusb: P8,
  minus: I8,
  minusd: M8,
  minusdu: B8,
  MinusPlus: N8,
  mlcp: $8,
  mldr: z8,
  mnplus: V8,
  models: j8,
  Mopf: U8,
  mopf: H8,
  mp: G8,
  mscr: Z8,
  Mscr: W8,
  mstpos: J8,
  Mu: K8,
  mu: Y8,
  multimap: Q8,
  mumap: X8,
  nabla: e7,
  Nacute: t7,
  nacute: n7,
  nang: o7,
  nap: r7,
  napE: s7,
  napid: c7,
  napos: i7,
  napprox: l7,
  natural: a7,
  naturals: u7,
  natur: p7,
  nbsp: f7,
  nbump: d7,
  nbumpe: h7,
  ncap: m7,
  Ncaron: v7,
  ncaron: g7,
  Ncedil: b7,
  ncedil: C7,
  ncong: _7,
  ncongdot: k7,
  ncup: x7,
  Ncy: y7,
  ncy: w7,
  ndash: A7,
  nearhk: E7,
  nearr: D7,
  neArr: S7,
  nearrow: q7,
  ne: T7,
  nedot: F7,
  NegativeMediumSpace: L7,
  NegativeThickSpace: R7,
  NegativeThinSpace: O7,
  NegativeVeryThinSpace: P7,
  nequiv: I7,
  nesear: M7,
  nesim: B7,
  NestedGreaterGreater: N7,
  NestedLessLess: $7,
  NewLine: z7,
  nexist: V7,
  nexists: j7,
  Nfr: U7,
  nfr: H7,
  ngE: G7,
  nge: Z7,
  ngeq: W7,
  ngeqq: J7,
  ngeqslant: K7,
  nges: Y7,
  nGg: Q7,
  ngsim: X7,
  nGt: e5,
  ngt: t5,
  ngtr: n5,
  nGtv: o5,
  nharr: r5,
  nhArr: s5,
  nhpar: c5,
  ni: i5,
  nis: l5,
  nisd: a5,
  niv: u5,
  NJcy: p5,
  njcy: f5,
  nlarr: d5,
  nlArr: h5,
  nldr: m5,
  nlE: v5,
  nle: g5,
  nleftarrow: b5,
  nLeftarrow: C5,
  nleftrightarrow: _5,
  nLeftrightarrow: k5,
  nleq: x5,
  nleqq: y5,
  nleqslant: w5,
  nles: A5,
  nless: E5,
  nLl: D5,
  nlsim: S5,
  nLt: q5,
  nlt: T5,
  nltri: F5,
  nltrie: L5,
  nLtv: R5,
  nmid: O5,
  NoBreak: P5,
  NonBreakingSpace: I5,
  nopf: M5,
  Nopf: B5,
  Not: N5,
  not: $5,
  NotCongruent: z5,
  NotCupCap: V5,
  NotDoubleVerticalBar: j5,
  NotElement: U5,
  NotEqual: H5,
  NotEqualTilde: G5,
  NotExists: Z5,
  NotGreater: W5,
  NotGreaterEqual: J5,
  NotGreaterFullEqual: K5,
  NotGreaterGreater: Y5,
  NotGreaterLess: Q5,
  NotGreaterSlantEqual: X5,
  NotGreaterTilde: e9,
  NotHumpDownHump: t9,
  NotHumpEqual: n9,
  notin: o9,
  notindot: r9,
  notinE: s9,
  notinva: c9,
  notinvb: i9,
  notinvc: l9,
  NotLeftTriangleBar: a9,
  NotLeftTriangle: u9,
  NotLeftTriangleEqual: p9,
  NotLess: f9,
  NotLessEqual: d9,
  NotLessGreater: h9,
  NotLessLess: m9,
  NotLessSlantEqual: v9,
  NotLessTilde: g9,
  NotNestedGreaterGreater: b9,
  NotNestedLessLess: C9,
  notni: _9,
  notniva: k9,
  notnivb: x9,
  notnivc: y9,
  NotPrecedes: w9,
  NotPrecedesEqual: A9,
  NotPrecedesSlantEqual: E9,
  NotReverseElement: D9,
  NotRightTriangleBar: S9,
  NotRightTriangle: q9,
  NotRightTriangleEqual: T9,
  NotSquareSubset: F9,
  NotSquareSubsetEqual: L9,
  NotSquareSuperset: R9,
  NotSquareSupersetEqual: O9,
  NotSubset: P9,
  NotSubsetEqual: I9,
  NotSucceeds: M9,
  NotSucceedsEqual: B9,
  NotSucceedsSlantEqual: N9,
  NotSucceedsTilde: $9,
  NotSuperset: z9,
  NotSupersetEqual: V9,
  NotTilde: j9,
  NotTildeEqual: U9,
  NotTildeFullEqual: H9,
  NotTildeTilde: G9,
  NotVerticalBar: Z9,
  nparallel: W9,
  npar: J9,
  nparsl: K9,
  npart: Y9,
  npolint: Q9,
  npr: X9,
  nprcue: eb,
  nprec: tb,
  npreceq: nb,
  npre: ob,
  nrarrc: rb,
  nrarr: sb,
  nrArr: cb,
  nrarrw: ib,
  nrightarrow: lb,
  nRightarrow: ab,
  nrtri: ub,
  nrtrie: pb,
  nsc: fb,
  nsccue: db,
  nsce: hb,
  Nscr: mb,
  nscr: vb,
  nshortmid: gb,
  nshortparallel: bb,
  nsim: Cb,
  nsime: _b,
  nsimeq: kb,
  nsmid: xb,
  nspar: yb,
  nsqsube: wb,
  nsqsupe: Ab,
  nsub: Eb,
  nsubE: Db,
  nsube: Sb,
  nsubset: qb,
  nsubseteq: Tb,
  nsubseteqq: Fb,
  nsucc: Lb,
  nsucceq: Rb,
  nsup: Ob,
  nsupE: Pb,
  nsupe: Ib,
  nsupset: Mb,
  nsupseteq: Bb,
  nsupseteqq: Nb,
  ntgl: $b,
  Ntilde: zb,
  ntilde: Vb,
  ntlg: jb,
  ntriangleleft: Ub,
  ntrianglelefteq: Hb,
  ntriangleright: Gb,
  ntrianglerighteq: Zb,
  Nu: Wb,
  nu: Jb,
  num: Kb,
  numero: Yb,
  numsp: Qb,
  nvap: Xb,
  nvdash: eC,
  nvDash: tC,
  nVdash: nC,
  nVDash: oC,
  nvge: rC,
  nvgt: sC,
  nvHarr: cC,
  nvinfin: iC,
  nvlArr: lC,
  nvle: aC,
  nvlt: uC,
  nvltrie: pC,
  nvrArr: fC,
  nvrtrie: dC,
  nvsim: hC,
  nwarhk: mC,
  nwarr: vC,
  nwArr: gC,
  nwarrow: bC,
  nwnear: CC,
  Oacute: _C,
  oacute: kC,
  oast: xC,
  Ocirc: yC,
  ocirc: wC,
  ocir: AC,
  Ocy: EC,
  ocy: DC,
  odash: SC,
  Odblac: qC,
  odblac: TC,
  odiv: FC,
  odot: LC,
  odsold: RC,
  OElig: OC,
  oelig: PC,
  ofcir: IC,
  Ofr: MC,
  ofr: BC,
  ogon: NC,
  Ograve: $C,
  ograve: zC,
  ogt: VC,
  ohbar: jC,
  ohm: UC,
  oint: HC,
  olarr: GC,
  olcir: ZC,
  olcross: WC,
  oline: JC,
  olt: KC,
  Omacr: YC,
  omacr: QC,
  Omega: XC,
  omega: e_,
  Omicron: t_,
  omicron: n_,
  omid: o_,
  ominus: r_,
  Oopf: s_,
  oopf: c_,
  opar: i_,
  OpenCurlyDoubleQuote: l_,
  OpenCurlyQuote: a_,
  operp: u_,
  oplus: p_,
  orarr: f_,
  Or: d_,
  or: h_,
  ord: m_,
  order: v_,
  orderof: g_,
  ordf: b_,
  ordm: C_,
  origof: __,
  oror: k_,
  orslope: x_,
  orv: y_,
  oS: w_,
  Oscr: A_,
  oscr: E_,
  Oslash: D_,
  oslash: S_,
  osol: q_,
  Otilde: T_,
  otilde: F_,
  otimesas: L_,
  Otimes: R_,
  otimes: O_,
  Ouml: P_,
  ouml: I_,
  ovbar: M_,
  OverBar: B_,
  OverBrace: N_,
  OverBracket: $_,
  OverParenthesis: z_,
  para: V_,
  parallel: j_,
  par: U_,
  parsim: H_,
  parsl: G_,
  part: Z_,
  PartialD: W_,
  Pcy: J_,
  pcy: K_,
  percnt: Y_,
  period: Q_,
  permil: X_,
  perp: ek,
  pertenk: tk,
  Pfr: nk,
  pfr: ok,
  Phi: rk,
  phi: sk,
  phiv: ck,
  phmmat: ik,
  phone: lk,
  Pi: ak,
  pi: uk,
  pitchfork: pk,
  piv: fk,
  planck: dk,
  planckh: hk,
  plankv: mk,
  plusacir: vk,
  plusb: gk,
  pluscir: bk,
  plus: Ck,
  plusdo: _k,
  plusdu: kk,
  pluse: xk,
  PlusMinus: yk,
  plusmn: wk,
  plussim: Ak,
  plustwo: Ek,
  pm: Dk,
  Poincareplane: Sk,
  pointint: qk,
  popf: Tk,
  Popf: Fk,
  pound: Lk,
  prap: Rk,
  Pr: Ok,
  pr: Pk,
  prcue: Ik,
  precapprox: Mk,
  prec: Bk,
  preccurlyeq: Nk,
  Precedes: $k,
  PrecedesEqual: zk,
  PrecedesSlantEqual: Vk,
  PrecedesTilde: jk,
  preceq: Uk,
  precnapprox: Hk,
  precneqq: Gk,
  precnsim: Zk,
  pre: Wk,
  prE: Jk,
  precsim: Kk,
  prime: Yk,
  Prime: Qk,
  primes: Xk,
  prnap: ex,
  prnE: tx,
  prnsim: nx,
  prod: ox,
  Product: rx,
  profalar: sx,
  profline: cx,
  profsurf: ix,
  prop: lx,
  Proportional: ax,
  Proportion: ux,
  propto: px,
  prsim: fx,
  prurel: dx,
  Pscr: hx,
  pscr: mx,
  Psi: vx,
  psi: gx,
  puncsp: bx,
  Qfr: Cx,
  qfr: _x,
  qint: kx,
  qopf: xx,
  Qopf: yx,
  qprime: wx,
  Qscr: Ax,
  qscr: Ex,
  quaternions: Dx,
  quatint: Sx,
  quest: qx,
  questeq: Tx,
  quot: Fx,
  QUOT: Lx,
  rAarr: Rx,
  race: Ox,
  Racute: Px,
  racute: Ix,
  radic: Mx,
  raemptyv: Bx,
  rang: Nx,
  Rang: $x,
  rangd: zx,
  range: Vx,
  rangle: jx,
  raquo: Ux,
  rarrap: Hx,
  rarrb: Gx,
  rarrbfs: Zx,
  rarrc: Wx,
  rarr: Jx,
  Rarr: Kx,
  rArr: Yx,
  rarrfs: Qx,
  rarrhk: Xx,
  rarrlp: ey,
  rarrpl: ty,
  rarrsim: ny,
  Rarrtl: oy,
  rarrtl: ry,
  rarrw: sy,
  ratail: cy,
  rAtail: iy,
  ratio: ly,
  rationals: ay,
  rbarr: uy,
  rBarr: py,
  RBarr: fy,
  rbbrk: dy,
  rbrace: hy,
  rbrack: my,
  rbrke: vy,
  rbrksld: gy,
  rbrkslu: by,
  Rcaron: Cy,
  rcaron: _y,
  Rcedil: ky,
  rcedil: xy,
  rceil: yy,
  rcub: wy,
  Rcy: Ay,
  rcy: Ey,
  rdca: Dy,
  rdldhar: Sy,
  rdquo: qy,
  rdquor: Ty,
  rdsh: Fy,
  real: Ly,
  realine: Ry,
  realpart: Oy,
  reals: Py,
  Re: Iy,
  rect: My,
  reg: By,
  REG: Ny,
  ReverseElement: $y,
  ReverseEquilibrium: zy,
  ReverseUpEquilibrium: Vy,
  rfisht: jy,
  rfloor: Uy,
  rfr: Hy,
  Rfr: Gy,
  rHar: Zy,
  rhard: Wy,
  rharu: Jy,
  rharul: Ky,
  Rho: Yy,
  rho: Qy,
  rhov: Xy,
  RightAngleBracket: ew,
  RightArrowBar: tw,
  rightarrow: nw,
  RightArrow: ow,
  Rightarrow: rw,
  RightArrowLeftArrow: sw,
  rightarrowtail: cw,
  RightCeiling: iw,
  RightDoubleBracket: lw,
  RightDownTeeVector: aw,
  RightDownVectorBar: uw,
  RightDownVector: pw,
  RightFloor: fw,
  rightharpoondown: dw,
  rightharpoonup: hw,
  rightleftarrows: mw,
  rightleftharpoons: vw,
  rightrightarrows: gw,
  rightsquigarrow: bw,
  RightTeeArrow: Cw,
  RightTee: _w,
  RightTeeVector: kw,
  rightthreetimes: xw,
  RightTriangleBar: yw,
  RightTriangle: ww,
  RightTriangleEqual: Aw,
  RightUpDownVector: Ew,
  RightUpTeeVector: Dw,
  RightUpVectorBar: Sw,
  RightUpVector: qw,
  RightVectorBar: Tw,
  RightVector: Fw,
  ring: Lw,
  risingdotseq: Rw,
  rlarr: Ow,
  rlhar: Pw,
  rlm: Iw,
  rmoustache: Mw,
  rmoust: Bw,
  rnmid: Nw,
  roang: $w,
  roarr: zw,
  robrk: Vw,
  ropar: jw,
  ropf: Uw,
  Ropf: Hw,
  roplus: Gw,
  rotimes: Zw,
  RoundImplies: Ww,
  rpar: Jw,
  rpargt: Kw,
  rppolint: Yw,
  rrarr: Qw,
  Rrightarrow: Xw,
  rsaquo: eA,
  rscr: tA,
  Rscr: nA,
  rsh: oA,
  Rsh: rA,
  rsqb: sA,
  rsquo: cA,
  rsquor: iA,
  rthree: lA,
  rtimes: aA,
  rtri: uA,
  rtrie: pA,
  rtrif: fA,
  rtriltri: dA,
  RuleDelayed: hA,
  ruluhar: mA,
  rx: vA,
  Sacute: gA,
  sacute: bA,
  sbquo: CA,
  scap: _A,
  Scaron: kA,
  scaron: xA,
  Sc: yA,
  sc: wA,
  sccue: AA,
  sce: EA,
  scE: DA,
  Scedil: SA,
  scedil: qA,
  Scirc: TA,
  scirc: FA,
  scnap: LA,
  scnE: RA,
  scnsim: OA,
  scpolint: PA,
  scsim: IA,
  Scy: MA,
  scy: BA,
  sdotb: NA,
  sdot: $A,
  sdote: zA,
  searhk: VA,
  searr: jA,
  seArr: UA,
  searrow: HA,
  sect: GA,
  semi: ZA,
  seswar: WA,
  setminus: JA,
  setmn: KA,
  sext: YA,
  Sfr: QA,
  sfr: XA,
  sfrown: eE,
  sharp: tE,
  SHCHcy: nE,
  shchcy: oE,
  SHcy: rE,
  shcy: sE,
  ShortDownArrow: cE,
  ShortLeftArrow: iE,
  shortmid: lE,
  shortparallel: aE,
  ShortRightArrow: uE,
  ShortUpArrow: pE,
  shy: fE,
  Sigma: dE,
  sigma: hE,
  sigmaf: mE,
  sigmav: vE,
  sim: gE,
  simdot: bE,
  sime: CE,
  simeq: _E,
  simg: kE,
  simgE: xE,
  siml: yE,
  simlE: wE,
  simne: AE,
  simplus: EE,
  simrarr: DE,
  slarr: SE,
  SmallCircle: qE,
  smallsetminus: TE,
  smashp: FE,
  smeparsl: LE,
  smid: RE,
  smile: OE,
  smt: PE,
  smte: IE,
  smtes: ME,
  SOFTcy: BE,
  softcy: NE,
  solbar: $E,
  solb: zE,
  sol: VE,
  Sopf: jE,
  sopf: UE,
  spades: HE,
  spadesuit: GE,
  spar: ZE,
  sqcap: WE,
  sqcaps: JE,
  sqcup: KE,
  sqcups: YE,
  Sqrt: QE,
  sqsub: XE,
  sqsube: eD,
  sqsubset: tD,
  sqsubseteq: nD,
  sqsup: oD,
  sqsupe: rD,
  sqsupset: sD,
  sqsupseteq: cD,
  square: iD,
  Square: lD,
  SquareIntersection: aD,
  SquareSubset: uD,
  SquareSubsetEqual: pD,
  SquareSuperset: fD,
  SquareSupersetEqual: dD,
  SquareUnion: hD,
  squarf: mD,
  squ: vD,
  squf: gD,
  srarr: bD,
  Sscr: CD,
  sscr: _D,
  ssetmn: kD,
  ssmile: xD,
  sstarf: yD,
  Star: wD,
  star: AD,
  starf: ED,
  straightepsilon: DD,
  straightphi: SD,
  strns: qD,
  sub: TD,
  Sub: FD,
  subdot: LD,
  subE: RD,
  sube: OD,
  subedot: PD,
  submult: ID,
  subnE: MD,
  subne: BD,
  subplus: ND,
  subrarr: $D,
  subset: zD,
  Subset: VD,
  subseteq: jD,
  subseteqq: UD,
  SubsetEqual: HD,
  subsetneq: GD,
  subsetneqq: ZD,
  subsim: WD,
  subsub: JD,
  subsup: KD,
  succapprox: YD,
  succ: QD,
  succcurlyeq: XD,
  Succeeds: eS,
  SucceedsEqual: tS,
  SucceedsSlantEqual: nS,
  SucceedsTilde: oS,
  succeq: rS,
  succnapprox: sS,
  succneqq: cS,
  succnsim: iS,
  succsim: lS,
  SuchThat: aS,
  sum: uS,
  Sum: pS,
  sung: fS,
  sup1: dS,
  sup2: hS,
  sup3: mS,
  sup: vS,
  Sup: gS,
  supdot: bS,
  supdsub: CS,
  supE: _S,
  supe: kS,
  supedot: xS,
  Superset: yS,
  SupersetEqual: wS,
  suphsol: AS,
  suphsub: ES,
  suplarr: DS,
  supmult: SS,
  supnE: qS,
  supne: TS,
  supplus: FS,
  supset: LS,
  Supset: RS,
  supseteq: OS,
  supseteqq: PS,
  supsetneq: IS,
  supsetneqq: MS,
  supsim: BS,
  supsub: NS,
  supsup: $S,
  swarhk: zS,
  swarr: VS,
  swArr: jS,
  swarrow: US,
  swnwar: HS,
  szlig: GS,
  Tab: ZS,
  target: WS,
  Tau: JS,
  tau: KS,
  tbrk: YS,
  Tcaron: QS,
  tcaron: XS,
  Tcedil: eq,
  tcedil: tq,
  Tcy: nq,
  tcy: oq,
  tdot: rq,
  telrec: sq,
  Tfr: cq,
  tfr: iq,
  there4: lq,
  therefore: aq,
  Therefore: uq,
  Theta: pq,
  theta: fq,
  thetasym: dq,
  thetav: hq,
  thickapprox: mq,
  thicksim: vq,
  ThickSpace: gq,
  ThinSpace: bq,
  thinsp: Cq,
  thkap: _q,
  thksim: kq,
  THORN: xq,
  thorn: yq,
  tilde: wq,
  Tilde: Aq,
  TildeEqual: Eq,
  TildeFullEqual: Dq,
  TildeTilde: Sq,
  timesbar: qq,
  timesb: Tq,
  times: Fq,
  timesd: Lq,
  tint: Rq,
  toea: Oq,
  topbot: Pq,
  topcir: Iq,
  top: Mq,
  Topf: Bq,
  topf: Nq,
  topfork: $q,
  tosa: zq,
  tprime: Vq,
  trade: jq,
  TRADE: Uq,
  triangle: Hq,
  triangledown: Gq,
  triangleleft: Zq,
  trianglelefteq: Wq,
  triangleq: Jq,
  triangleright: Kq,
  trianglerighteq: Yq,
  tridot: Qq,
  trie: Xq,
  triminus: eT,
  TripleDot: tT,
  triplus: nT,
  trisb: oT,
  tritime: rT,
  trpezium: sT,
  Tscr: cT,
  tscr: iT,
  TScy: lT,
  tscy: aT,
  TSHcy: uT,
  tshcy: pT,
  Tstrok: fT,
  tstrok: dT,
  twixt: hT,
  twoheadleftarrow: mT,
  twoheadrightarrow: vT,
  Uacute: gT,
  uacute: bT,
  uarr: CT,
  Uarr: _T,
  uArr: kT,
  Uarrocir: xT,
  Ubrcy: yT,
  ubrcy: wT,
  Ubreve: AT,
  ubreve: ET,
  Ucirc: DT,
  ucirc: ST,
  Ucy: qT,
  ucy: TT,
  udarr: FT,
  Udblac: LT,
  udblac: RT,
  udhar: OT,
  ufisht: PT,
  Ufr: IT,
  ufr: MT,
  Ugrave: BT,
  ugrave: NT,
  uHar: $T,
  uharl: zT,
  uharr: VT,
  uhblk: jT,
  ulcorn: UT,
  ulcorner: HT,
  ulcrop: GT,
  ultri: ZT,
  Umacr: WT,
  umacr: JT,
  uml: KT,
  UnderBar: YT,
  UnderBrace: QT,
  UnderBracket: XT,
  UnderParenthesis: eF,
  Union: tF,
  UnionPlus: nF,
  Uogon: oF,
  uogon: rF,
  Uopf: sF,
  uopf: cF,
  UpArrowBar: iF,
  uparrow: lF,
  UpArrow: aF,
  Uparrow: uF,
  UpArrowDownArrow: pF,
  updownarrow: fF,
  UpDownArrow: dF,
  Updownarrow: hF,
  UpEquilibrium: mF,
  upharpoonleft: vF,
  upharpoonright: gF,
  uplus: bF,
  UpperLeftArrow: CF,
  UpperRightArrow: _F,
  upsi: kF,
  Upsi: xF,
  upsih: yF,
  Upsilon: wF,
  upsilon: AF,
  UpTeeArrow: EF,
  UpTee: DF,
  upuparrows: SF,
  urcorn: qF,
  urcorner: TF,
  urcrop: FF,
  Uring: LF,
  uring: RF,
  urtri: OF,
  Uscr: PF,
  uscr: IF,
  utdot: MF,
  Utilde: BF,
  utilde: NF,
  utri: $F,
  utrif: zF,
  uuarr: VF,
  Uuml: jF,
  uuml: UF,
  uwangle: HF,
  vangrt: GF,
  varepsilon: ZF,
  varkappa: WF,
  varnothing: JF,
  varphi: KF,
  varpi: YF,
  varpropto: QF,
  varr: XF,
  vArr: eL,
  varrho: tL,
  varsigma: nL,
  varsubsetneq: oL,
  varsubsetneqq: rL,
  varsupsetneq: sL,
  varsupsetneqq: cL,
  vartheta: iL,
  vartriangleleft: lL,
  vartriangleright: aL,
  vBar: uL,
  Vbar: pL,
  vBarv: fL,
  Vcy: dL,
  vcy: hL,
  vdash: mL,
  vDash: vL,
  Vdash: gL,
  VDash: bL,
  Vdashl: CL,
  veebar: _L,
  vee: kL,
  Vee: xL,
  veeeq: yL,
  vellip: wL,
  verbar: AL,
  Verbar: EL,
  vert: DL,
  Vert: SL,
  VerticalBar: qL,
  VerticalLine: TL,
  VerticalSeparator: FL,
  VerticalTilde: LL,
  VeryThinSpace: RL,
  Vfr: OL,
  vfr: PL,
  vltri: IL,
  vnsub: ML,
  vnsup: BL,
  Vopf: NL,
  vopf: $L,
  vprop: zL,
  vrtri: VL,
  Vscr: jL,
  vscr: UL,
  vsubnE: HL,
  vsubne: GL,
  vsupnE: ZL,
  vsupne: WL,
  Vvdash: JL,
  vzigzag: KL,
  Wcirc: YL,
  wcirc: QL,
  wedbar: XL,
  wedge: eR,
  Wedge: tR,
  wedgeq: nR,
  weierp: oR,
  Wfr: rR,
  wfr: sR,
  Wopf: cR,
  wopf: iR,
  wp: lR,
  wr: aR,
  wreath: uR,
  Wscr: pR,
  wscr: fR,
  xcap: dR,
  xcirc: hR,
  xcup: mR,
  xdtri: vR,
  Xfr: gR,
  xfr: bR,
  xharr: CR,
  xhArr: _R,
  Xi: kR,
  xi: xR,
  xlarr: yR,
  xlArr: wR,
  xmap: AR,
  xnis: ER,
  xodot: DR,
  Xopf: SR,
  xopf: qR,
  xoplus: TR,
  xotime: FR,
  xrarr: LR,
  xrArr: RR,
  Xscr: OR,
  xscr: PR,
  xsqcup: IR,
  xuplus: MR,
  xutri: BR,
  xvee: NR,
  xwedge: $R,
  Yacute: zR,
  yacute: VR,
  YAcy: jR,
  yacy: UR,
  Ycirc: HR,
  ycirc: GR,
  Ycy: ZR,
  ycy: WR,
  yen: JR,
  Yfr: KR,
  yfr: YR,
  YIcy: QR,
  yicy: XR,
  Yopf: eO,
  yopf: tO,
  Yscr: nO,
  yscr: oO,
  YUcy: rO,
  yucy: sO,
  yuml: cO,
  Yuml: iO,
  Zacute: lO,
  zacute: aO,
  Zcaron: uO,
  zcaron: pO,
  Zcy: fO,
  zcy: dO,
  Zdot: hO,
  zdot: mO,
  zeetrf: vO,
  ZeroWidthSpace: gO,
  Zeta: bO,
  zeta: CO,
  zfr: _O,
  Zfr: kO,
  ZHcy: xO,
  zhcy: yO,
  zigrarr: wO,
  zopf: AO,
  Zopf: EO,
  Zscr: DO,
  zscr: SO,
  zwj: qO,
  zwnj: TO
};
var yo = FO;
var Wt = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
var Pe = {};
var dn = {};
function LO(t) {
  var e, n, o = dn[t];
  if (o)
    return o;
  for (o = dn[t] = [], e = 0; e < 128; e++)
    n = String.fromCharCode(e), /^[0-9a-z]$/i.test(n) ? o.push(n) : o.push("%" + ("0" + e.toString(16).toUpperCase()).slice(-2));
  for (e = 0; e < t.length; e++)
    o[t.charCodeAt(e)] = t[e];
  return o;
}
function at(t, e, n) {
  var o, r, s, i, c, l = "";
  for (typeof e != "string" && (n = e, e = at.defaultChars), typeof n > "u" && (n = true), c = LO(e), o = 0, r = t.length; o < r; o++) {
    if (s = t.charCodeAt(o), n && s === 37 && o + 2 < r && /^[0-9a-f]{2}$/i.test(t.slice(o + 1, o + 3))) {
      l += t.slice(o, o + 3), o += 2;
      continue;
    }
    if (s < 128) {
      l += c[s];
      continue;
    }
    if (s >= 55296 && s <= 57343) {
      if (s >= 55296 && s <= 56319 && o + 1 < r && (i = t.charCodeAt(o + 1), i >= 56320 && i <= 57343)) {
        l += encodeURIComponent(t[o] + t[o + 1]), o++;
        continue;
      }
      l += "%EF%BF%BD";
      continue;
    }
    l += encodeURIComponent(t[o]);
  }
  return l;
}
at.defaultChars = ";/?:@&=+$,-_.!~*'()#";
at.componentChars = "-_.!~*'()";
var RO = at;
var hn = {};
function OO(t) {
  var e, n, o = hn[t];
  if (o)
    return o;
  for (o = hn[t] = [], e = 0; e < 128; e++)
    n = String.fromCharCode(e), o.push(n);
  for (e = 0; e < t.length; e++)
    n = t.charCodeAt(e), o[n] = "%" + ("0" + n.toString(16).toUpperCase()).slice(-2);
  return o;
}
function ut(t, e) {
  var n;
  return typeof e != "string" && (e = ut.defaultChars), n = OO(e), t.replace(/(%[a-f0-9]{2})+/gi, function(o) {
    var r, s, i, c, l, a, u, p = "";
    for (r = 0, s = o.length; r < s; r += 3) {
      if (i = parseInt(o.slice(r + 1, r + 3), 16), i < 128) {
        p += n[i];
        continue;
      }
      if ((i & 224) === 192 && r + 3 < s && (c = parseInt(o.slice(r + 4, r + 6), 16), (c & 192) === 128)) {
        u = i << 6 & 1984 | c & 63, u < 128 ? p += "��" : p += String.fromCharCode(u), r += 3;
        continue;
      }
      if ((i & 240) === 224 && r + 6 < s && (c = parseInt(o.slice(r + 4, r + 6), 16), l = parseInt(o.slice(r + 7, r + 9), 16), (c & 192) === 128 && (l & 192) === 128)) {
        u = i << 12 & 61440 | c << 6 & 4032 | l & 63, u < 2048 || u >= 55296 && u <= 57343 ? p += "���" : p += String.fromCharCode(u), r += 6;
        continue;
      }
      if ((i & 248) === 240 && r + 9 < s && (c = parseInt(o.slice(r + 4, r + 6), 16), l = parseInt(o.slice(r + 7, r + 9), 16), a = parseInt(o.slice(r + 10, r + 12), 16), (c & 192) === 128 && (l & 192) === 128 && (a & 192) === 128)) {
        u = i << 18 & 1835008 | c << 12 & 258048 | l << 6 & 4032 | a & 63, u < 65536 || u > 1114111 ? p += "����" : (u -= 65536, p += String.fromCharCode(55296 + (u >> 10), 56320 + (u & 1023))), r += 9;
        continue;
      }
      p += "�";
    }
    return p;
  });
}
ut.defaultChars = ";/?:@&=+$,#";
ut.componentChars = "";
var PO = ut;
var IO = function(e) {
  var n = "";
  return n += e.protocol || "", n += e.slashes ? "//" : "", n += e.auth ? e.auth + "@" : "", e.hostname && e.hostname.indexOf(":") !== -1 ? n += "[" + e.hostname + "]" : n += e.hostname || "", n += e.port ? ":" + e.port : "", n += e.pathname || "", n += e.search || "", n += e.hash || "", n;
};
function rt() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
var MO = /^([a-z0-9.+-]+:)/i;
var BO = /:[0-9]*$/;
var NO = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
var $O = ["<", ">", '"', "`", " ", "\r", `
`, "	"];
var zO = ["{", "}", "|", "\\", "^", "`"].concat($O);
var VO = ["'"].concat(zO);
var mn = ["%", "/", "?", ";", "#"].concat(VO);
var vn = ["/", "?", "#"];
var jO = 255;
var gn = /^[+a-z0-9A-Z_-]{0,63}$/;
var UO = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
var bn = {
  javascript: true,
  "javascript:": true
};
var Cn = {
  http: true,
  https: true,
  ftp: true,
  gopher: true,
  file: true,
  "http:": true,
  "https:": true,
  "ftp:": true,
  "gopher:": true,
  "file:": true
};
function HO(t, e) {
  if (t && t instanceof rt)
    return t;
  var n = new rt();
  return n.parse(t, e), n;
}
rt.prototype.parse = function(t, e) {
  var n, o, r, s, i, c = t;
  if (c = c.trim(), !e && t.split("#").length === 1) {
    var l = NO.exec(c);
    if (l)
      return this.pathname = l[1], l[2] && (this.search = l[2]), this;
  }
  var a = MO.exec(c);
  if (a && (a = a[0], r = a.toLowerCase(), this.protocol = a, c = c.substr(a.length)), (e || a || c.match(/^\/\/[^@\/]+@[^@\/]+/)) && (i = c.substr(0, 2) === "//", i && !(a && bn[a]) && (c = c.substr(2), this.slashes = true)), !bn[a] && (i || a && !Cn[a])) {
    var u = -1;
    for (n = 0; n < vn.length; n++)
      s = c.indexOf(vn[n]), s !== -1 && (u === -1 || s < u) && (u = s);
    var p, f;
    for (u === -1 ? f = c.lastIndexOf("@") : f = c.lastIndexOf("@", u), f !== -1 && (p = c.slice(0, f), c = c.slice(f + 1), this.auth = p), u = -1, n = 0; n < mn.length; n++)
      s = c.indexOf(mn[n]), s !== -1 && (u === -1 || s < u) && (u = s);
    u === -1 && (u = c.length), c[u - 1] === ":" && u--;
    var d = c.slice(0, u);
    c = c.slice(u), this.parseHost(d), this.hostname = this.hostname || "";
    var v = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!v) {
      var g = this.hostname.split(/\./);
      for (n = 0, o = g.length; n < o; n++) {
        var k = g[n];
        if (k && !k.match(gn)) {
          for (var h10 = "", m = 0, C = k.length; m < C; m++)
            k.charCodeAt(m) > 127 ? h10 += "x" : h10 += k[m];
          if (!h10.match(gn)) {
            var y = g.slice(0, n), w = g.slice(n + 1), b = k.match(UO);
            b && (y.push(b[1]), w.unshift(b[2])), w.length && (c = w.join(".") + c), this.hostname = y.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > jO && (this.hostname = ""), v && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  var T = c.indexOf("#");
  T !== -1 && (this.hash = c.substr(T), c = c.slice(0, T));
  var I = c.indexOf("?");
  return I !== -1 && (this.search = c.substr(I), c = c.slice(0, I)), c && (this.pathname = c), Cn[r] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
rt.prototype.parseHost = function(t) {
  var e = BO.exec(t);
  e && (e = e[0], e !== ":" && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t);
};
var GO = HO;
Pe.encode = RO;
Pe.decode = PO;
Pe.format = IO;
Pe.parse = GO;
var we = {};
var kt;
var _n;
function wo() {
  return _n || (_n = 1, kt = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/), kt;
}
var xt;
var kn;
function Ao() {
  return kn || (kn = 1, xt = /[\0-\x1F\x7F-\x9F]/), xt;
}
var yt;
var xn;
function ZO() {
  return xn || (xn = 1, yt = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/), yt;
}
var wt;
var yn;
function Eo() {
  return yn || (yn = 1, wt = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/), wt;
}
var wn;
function WO() {
  return wn || (wn = 1, we.Any = wo(), we.Cc = Ao(), we.Cf = ZO(), we.P = Wt, we.Z = Eo()), we;
}
(function(t) {
  function e(_) {
    return Object.prototype.toString.call(_);
  }
  function n(_) {
    return e(_) === "[object String]";
  }
  var o = Object.prototype.hasOwnProperty;
  function r(_, O) {
    return o.call(_, O);
  }
  function s(_) {
    var O = Array.prototype.slice.call(arguments, 1);
    return O.forEach(function(P) {
      if (P) {
        if (typeof P != "object")
          throw new TypeError(P + "must be object");
        Object.keys(P).forEach(function(M) {
          _[M] = P[M];
        });
      }
    }), _;
  }
  function i(_, O, P) {
    return [].concat(_.slice(0, O), P, _.slice(O + 1));
  }
  function c(_) {
    return !(_ >= 55296 && _ <= 57343 || _ >= 64976 && _ <= 65007 || (_ & 65535) === 65535 || (_ & 65535) === 65534 || _ >= 0 && _ <= 8 || _ === 11 || _ >= 14 && _ <= 31 || _ >= 127 && _ <= 159 || _ > 1114111);
  }
  function l(_) {
    if (_ > 65535) {
      _ -= 65536;
      var O = 55296 + (_ >> 10), P = 56320 + (_ & 1023);
      return String.fromCharCode(O, P);
    }
    return String.fromCharCode(_);
  }
  var a = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g, u = /&([a-z#][a-z0-9]{1,31});/gi, p = new RegExp(a.source + "|" + u.source, "gi"), f = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i, d = yo;
  function v(_, O) {
    var P = 0;
    return r(d, O) ? d[O] : O.charCodeAt(0) === 35 && f.test(O) && (P = O[1].toLowerCase() === "x" ? parseInt(O.slice(2), 16) : parseInt(O.slice(1), 10), c(P)) ? l(P) : _;
  }
  function g(_) {
    return _.indexOf("\\") < 0 ? _ : _.replace(a, "$1");
  }
  function k(_) {
    return _.indexOf("\\") < 0 && _.indexOf("&") < 0 ? _ : _.replace(p, function(O, P, M) {
      return P || v(O, M);
    });
  }
  var h10 = /[&<>"]/, m = /[&<>"]/g, C = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
  };
  function y(_) {
    return C[_];
  }
  function w(_) {
    return h10.test(_) ? _.replace(m, y) : _;
  }
  var b = /[.?*+^$[\]\\(){}|-]/g;
  function T(_) {
    return _.replace(b, "\\$&");
  }
  function I(_) {
    switch (_) {
      case 9:
      case 32:
        return true;
    }
    return false;
  }
  function S(_) {
    if (_ >= 8192 && _ <= 8202)
      return true;
    switch (_) {
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 32:
      case 160:
      case 5760:
      case 8239:
      case 8287:
      case 12288:
        return true;
    }
    return false;
  }
  var x = Wt;
  function A(_) {
    return x.test(_);
  }
  function D(_) {
    switch (_) {
      case 33:
      case 34:
      case 35:
      case 36:
      case 37:
      case 38:
      case 39:
      case 40:
      case 41:
      case 42:
      case 43:
      case 44:
      case 45:
      case 46:
      case 47:
      case 58:
      case 59:
      case 60:
      case 61:
      case 62:
      case 63:
      case 64:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123:
      case 124:
      case 125:
      case 126:
        return true;
      default:
        return false;
    }
  }
  function F(_) {
    return _ = _.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (_ = _.replace(/ẞ/g, "ß")), _.toLowerCase().toUpperCase();
  }
  t.lib = {}, t.lib.mdurl = Pe, t.lib.ucmicro = WO(), t.assign = s, t.isString = n, t.has = r, t.unescapeMd = g, t.unescapeAll = k, t.isValidEntityCode = c, t.fromCodePoint = l, t.escapeHtml = w, t.arrayReplaceAt = i, t.isSpace = I, t.isWhiteSpace = S, t.isMdAsciiPunct = D, t.isPunctChar = A, t.escapeRE = T, t.normalizeReference = F;
})(B);
var pt = {};
var JO = function(e, n, o) {
  var r, s, i, c, l = -1, a = e.posMax, u = e.pos;
  for (e.pos = n + 1, r = 1; e.pos < a; ) {
    if (i = e.src.charCodeAt(e.pos), i === 93 && (r--, r === 0)) {
      s = true;
      break;
    }
    if (c = e.pos, e.md.inline.skipToken(e), i === 91) {
      if (c === e.pos - 1)
        r++;
      else if (o)
        return e.pos = u, -1;
    }
  }
  return s && (l = e.pos), e.pos = u, l;
};
var An = B.unescapeAll;
var KO = function(e, n, o) {
  var r, s, i = 0, c = n, l = {
    ok: false,
    pos: 0,
    lines: 0,
    str: ""
  };
  if (e.charCodeAt(n) === 60) {
    for (n++; n < o; ) {
      if (r = e.charCodeAt(n), r === 10 || r === 60)
        return l;
      if (r === 62)
        return l.pos = n + 1, l.str = An(e.slice(c + 1, n)), l.ok = true, l;
      if (r === 92 && n + 1 < o) {
        n += 2;
        continue;
      }
      n++;
    }
    return l;
  }
  for (s = 0; n < o && (r = e.charCodeAt(n), !(r === 32 || r < 32 || r === 127)); ) {
    if (r === 92 && n + 1 < o) {
      if (e.charCodeAt(n + 1) === 32)
        break;
      n += 2;
      continue;
    }
    if (r === 40 && (s++, s > 32))
      return l;
    if (r === 41) {
      if (s === 0)
        break;
      s--;
    }
    n++;
  }
  return c === n || s !== 0 || (l.str = An(e.slice(c, n)), l.lines = i, l.pos = n, l.ok = true), l;
};
var YO = B.unescapeAll;
var QO = function(e, n, o) {
  var r, s, i = 0, c = n, l = {
    ok: false,
    pos: 0,
    lines: 0,
    str: ""
  };
  if (n >= o || (s = e.charCodeAt(n), s !== 34 && s !== 39 && s !== 40))
    return l;
  for (n++, s === 40 && (s = 41); n < o; ) {
    if (r = e.charCodeAt(n), r === s)
      return l.pos = n + 1, l.lines = i, l.str = YO(e.slice(c + 1, n)), l.ok = true, l;
    if (r === 40 && s === 41)
      return l;
    r === 10 ? i++ : r === 92 && n + 1 < o && (n++, e.charCodeAt(n) === 10 && i++), n++;
  }
  return l;
};
pt.parseLinkLabel = JO;
pt.parseLinkDestination = KO;
pt.parseLinkTitle = QO;
var XO = B.assign;
var eP = B.unescapeAll;
var qe = B.escapeHtml;
var pe = {};
pe.code_inline = function(t, e, n, o, r) {
  var s = t[e];
  return "<code" + r.renderAttrs(s) + ">" + qe(t[e].content) + "</code>";
};
pe.code_block = function(t, e, n, o, r) {
  var s = t[e];
  return "<pre" + r.renderAttrs(s) + "><code>" + qe(t[e].content) + `</code></pre>
`;
};
pe.fence = function(t, e, n, o, r) {
  var s = t[e], i = s.info ? eP(s.info).trim() : "", c = "", l = "", a, u, p, f, d;
  return i && (p = i.split(/(\s+)/g), c = p[0], l = p.slice(2).join("")), n.highlight ? a = n.highlight(s.content, c, l) || qe(s.content) : a = qe(s.content), a.indexOf("<pre") === 0 ? a + `
` : i ? (u = s.attrIndex("class"), f = s.attrs ? s.attrs.slice() : [], u < 0 ? f.push(["class", n.langPrefix + c]) : (f[u] = f[u].slice(), f[u][1] += " " + n.langPrefix + c), d = {
    attrs: f
  }, "<pre><code" + r.renderAttrs(d) + ">" + a + `</code></pre>
`) : "<pre><code" + r.renderAttrs(s) + ">" + a + `</code></pre>
`;
};
pe.image = function(t, e, n, o, r) {
  var s = t[e];
  return s.attrs[s.attrIndex("alt")][1] = r.renderInlineAsText(s.children, n, o), r.renderToken(t, e, n);
};
pe.hardbreak = function(t, e, n) {
  return n.xhtmlOut ? `<br />
` : `<br>
`;
};
pe.softbreak = function(t, e, n) {
  return n.breaks ? n.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
pe.text = function(t, e) {
  return qe(t[e].content);
};
pe.html_block = function(t, e) {
  return t[e].content;
};
pe.html_inline = function(t, e) {
  return t[e].content;
};
function Ie() {
  this.rules = XO({}, pe);
}
Ie.prototype.renderAttrs = function(e) {
  var n, o, r;
  if (!e.attrs)
    return "";
  for (r = "", n = 0, o = e.attrs.length; n < o; n++)
    r += " " + qe(e.attrs[n][0]) + '="' + qe(e.attrs[n][1]) + '"';
  return r;
};
Ie.prototype.renderToken = function(e, n, o) {
  var r, s = "", i = false, c = e[n];
  return c.hidden ? "" : (c.block && c.nesting !== -1 && n && e[n - 1].hidden && (s += `
`), s += (c.nesting === -1 ? "</" : "<") + c.tag, s += this.renderAttrs(c), c.nesting === 0 && o.xhtmlOut && (s += " /"), c.block && (i = true, c.nesting === 1 && n + 1 < e.length && (r = e[n + 1], (r.type === "inline" || r.hidden || r.nesting === -1 && r.tag === c.tag) && (i = false))), s += i ? `>
` : ">", s);
};
Ie.prototype.renderInline = function(t, e, n) {
  for (var o, r = "", s = this.rules, i = 0, c = t.length; i < c; i++)
    o = t[i].type, typeof s[o] < "u" ? r += s[o](t, i, e, n, this) : r += this.renderToken(t, i, e);
  return r;
};
Ie.prototype.renderInlineAsText = function(t, e, n) {
  for (var o = "", r = 0, s = t.length; r < s; r++)
    t[r].type === "text" ? o += t[r].content : t[r].type === "image" ? o += this.renderInlineAsText(t[r].children, e, n) : t[r].type === "softbreak" && (o += `
`);
  return o;
};
Ie.prototype.render = function(t, e, n) {
  var o, r, s, i = "", c = this.rules;
  for (o = 0, r = t.length; o < r; o++)
    s = t[o].type, s === "inline" ? i += this.renderInline(t[o].children, e, n) : typeof c[s] < "u" ? i += c[t[o].type](t, o, e, n, this) : i += this.renderToken(t, o, e, n);
  return i;
};
var tP = Ie;
function se() {
  this.__rules__ = [], this.__cache__ = null;
}
se.prototype.__find__ = function(t) {
  for (var e = 0; e < this.__rules__.length; e++)
    if (this.__rules__[e].name === t)
      return e;
  return -1;
};
se.prototype.__compile__ = function() {
  var t = this, e = [""];
  t.__rules__.forEach(function(n) {
    n.enabled && n.alt.forEach(function(o) {
      e.indexOf(o) < 0 && e.push(o);
    });
  }), t.__cache__ = {}, e.forEach(function(n) {
    t.__cache__[n] = [], t.__rules__.forEach(function(o) {
      o.enabled && (n && o.alt.indexOf(n) < 0 || t.__cache__[n].push(o.fn));
    });
  });
};
se.prototype.at = function(t, e, n) {
  var o = this.__find__(t), r = n || {};
  if (o === -1)
    throw new Error("Parser rule not found: " + t);
  this.__rules__[o].fn = e, this.__rules__[o].alt = r.alt || [], this.__cache__ = null;
};
se.prototype.before = function(t, e, n, o) {
  var r = this.__find__(t), s = o || {};
  if (r === -1)
    throw new Error("Parser rule not found: " + t);
  this.__rules__.splice(r, 0, {
    name: e,
    enabled: true,
    fn: n,
    alt: s.alt || []
  }), this.__cache__ = null;
};
se.prototype.after = function(t, e, n, o) {
  var r = this.__find__(t), s = o || {};
  if (r === -1)
    throw new Error("Parser rule not found: " + t);
  this.__rules__.splice(r + 1, 0, {
    name: e,
    enabled: true,
    fn: n,
    alt: s.alt || []
  }), this.__cache__ = null;
};
se.prototype.push = function(t, e, n) {
  var o = n || {};
  this.__rules__.push({
    name: t,
    enabled: true,
    fn: e,
    alt: o.alt || []
  }), this.__cache__ = null;
};
se.prototype.enable = function(t, e) {
  Array.isArray(t) || (t = [t]);
  var n = [];
  return t.forEach(function(o) {
    var r = this.__find__(o);
    if (r < 0) {
      if (e)
        return;
      throw new Error("Rules manager: invalid rule name " + o);
    }
    this.__rules__[r].enabled = true, n.push(o);
  }, this), this.__cache__ = null, n;
};
se.prototype.enableOnly = function(t, e) {
  Array.isArray(t) || (t = [t]), this.__rules__.forEach(function(n) {
    n.enabled = false;
  }), this.enable(t, e);
};
se.prototype.disable = function(t, e) {
  Array.isArray(t) || (t = [t]);
  var n = [];
  return t.forEach(function(o) {
    var r = this.__find__(o);
    if (r < 0) {
      if (e)
        return;
      throw new Error("Rules manager: invalid rule name " + o);
    }
    this.__rules__[r].enabled = false, n.push(o);
  }, this), this.__cache__ = null, n;
};
se.prototype.getRules = function(t) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[t] || [];
};
var Jt = se;
var nP = /\r\n?|\n/g;
var oP = /\0/g;
var rP = function(e) {
  var n;
  n = e.src.replace(nP, `
`), n = n.replace(oP, "�"), e.src = n;
};
var sP = function(e) {
  var n;
  e.inlineMode ? (n = new e.Token("inline", "", 0), n.content = e.src, n.map = [0, 1], n.children = [], e.tokens.push(n)) : e.md.block.parse(e.src, e.md, e.env, e.tokens);
};
var cP = function(e) {
  var n = e.tokens, o, r, s;
  for (r = 0, s = n.length; r < s; r++)
    o = n[r], o.type === "inline" && e.md.inline.parse(o.content, e.md, e.env, o.children);
};
var iP = B.arrayReplaceAt;
function lP(t) {
  return /^<a[>\s]/i.test(t);
}
function aP(t) {
  return /^<\/a\s*>/i.test(t);
}
var uP = function(e) {
  var n, o, r, s, i, c, l, a, u, p, f, d, v, g, k, h10, m = e.tokens, C;
  if (e.md.options.linkify) {
    for (o = 0, r = m.length; o < r; o++)
      if (!(m[o].type !== "inline" || !e.md.linkify.pretest(m[o].content)))
        for (s = m[o].children, v = 0, n = s.length - 1; n >= 0; n--) {
          if (c = s[n], c.type === "link_close") {
            for (n--; s[n].level !== c.level && s[n].type !== "link_open"; )
              n--;
            continue;
          }
          if (c.type === "html_inline" && (lP(c.content) && v > 0 && v--, aP(c.content) && v++), !(v > 0) && c.type === "text" && e.md.linkify.test(c.content)) {
            for (u = c.content, C = e.md.linkify.match(u), l = [], d = c.level, f = 0, C.length > 0 && C[0].index === 0 && n > 0 && s[n - 1].type === "text_special" && (C = C.slice(1)), a = 0; a < C.length; a++)
              g = C[a].url, k = e.md.normalizeLink(g), e.md.validateLink(k) && (h10 = C[a].text, C[a].schema ? C[a].schema === "mailto:" && !/^mailto:/i.test(h10) ? h10 = e.md.normalizeLinkText("mailto:" + h10).replace(/^mailto:/, "") : h10 = e.md.normalizeLinkText(h10) : h10 = e.md.normalizeLinkText("http://" + h10).replace(/^http:\/\//, ""), p = C[a].index, p > f && (i = new e.Token("text", "", 0), i.content = u.slice(f, p), i.level = d, l.push(i)), i = new e.Token("link_open", "a", 1), i.attrs = [["href", k]], i.level = d++, i.markup = "linkify", i.info = "auto", l.push(i), i = new e.Token("text", "", 0), i.content = h10, i.level = d, l.push(i), i = new e.Token("link_close", "a", -1), i.level = --d, i.markup = "linkify", i.info = "auto", l.push(i), f = C[a].lastIndex);
            f < u.length && (i = new e.Token("text", "", 0), i.content = u.slice(f), i.level = d, l.push(i)), m[o].children = s = iP(s, n, l);
          }
        }
  }
};
var Do = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
var pP = /\((c|tm|r)\)/i;
var fP = /\((c|tm|r)\)/ig;
var dP = {
  c: "©",
  r: "®",
  tm: "™"
};
function hP(t, e) {
  return dP[e.toLowerCase()];
}
function mP(t) {
  var e, n, o = 0;
  for (e = t.length - 1; e >= 0; e--)
    n = t[e], n.type === "text" && !o && (n.content = n.content.replace(fP, hP)), n.type === "link_open" && n.info === "auto" && o--, n.type === "link_close" && n.info === "auto" && o++;
}
function vP(t) {
  var e, n, o = 0;
  for (e = t.length - 1; e >= 0; e--)
    n = t[e], n.type === "text" && !o && Do.test(n.content) && (n.content = n.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), n.type === "link_open" && n.info === "auto" && o--, n.type === "link_close" && n.info === "auto" && o++;
}
var gP = function(e) {
  var n;
  if (e.md.options.typographer)
    for (n = e.tokens.length - 1; n >= 0; n--)
      e.tokens[n].type === "inline" && (pP.test(e.tokens[n].content) && mP(e.tokens[n].children), Do.test(e.tokens[n].content) && vP(e.tokens[n].children));
};
var En = B.isWhiteSpace;
var Dn = B.isPunctChar;
var Sn = B.isMdAsciiPunct;
var bP = /['"]/;
var qn = /['"]/g;
var Tn = "’";
function Xe(t, e, n) {
  return t.slice(0, e) + n + t.slice(e + 1);
}
function CP(t, e) {
  var n, o, r, s, i, c, l, a, u, p, f, d, v, g, k, h10, m, C, y, w, b;
  for (y = [], n = 0; n < t.length; n++) {
    for (o = t[n], l = t[n].level, m = y.length - 1; m >= 0 && !(y[m].level <= l); m--)
      ;
    if (y.length = m + 1, o.type === "text") {
      r = o.content, i = 0, c = r.length;
      e:
        for (; i < c && (qn.lastIndex = i, s = qn.exec(r), !!s); ) {
          if (k = h10 = true, i = s.index + 1, C = s[0] === "'", u = 32, s.index - 1 >= 0)
            u = r.charCodeAt(s.index - 1);
          else
            for (m = n - 1; m >= 0 && !(t[m].type === "softbreak" || t[m].type === "hardbreak"); m--)
              if (t[m].content) {
                u = t[m].content.charCodeAt(t[m].content.length - 1);
                break;
              }
          if (p = 32, i < c)
            p = r.charCodeAt(i);
          else
            for (m = n + 1; m < t.length && !(t[m].type === "softbreak" || t[m].type === "hardbreak"); m++)
              if (t[m].content) {
                p = t[m].content.charCodeAt(0);
                break;
              }
          if (f = Sn(u) || Dn(String.fromCharCode(u)), d = Sn(p) || Dn(String.fromCharCode(p)), v = En(u), g = En(p), g ? k = false : d && (v || f || (k = false)), v ? h10 = false : f && (g || d || (h10 = false)), p === 34 && s[0] === '"' && u >= 48 && u <= 57 && (h10 = k = false), k && h10 && (k = f, h10 = d), !k && !h10) {
            C && (o.content = Xe(o.content, s.index, Tn));
            continue;
          }
          if (h10) {
            for (m = y.length - 1; m >= 0 && (a = y[m], !(y[m].level < l)); m--)
              if (a.single === C && y[m].level === l) {
                a = y[m], C ? (w = e.md.options.quotes[2], b = e.md.options.quotes[3]) : (w = e.md.options.quotes[0], b = e.md.options.quotes[1]), o.content = Xe(o.content, s.index, b), t[a.token].content = Xe(
                  t[a.token].content,
                  a.pos,
                  w
                ), i += b.length - 1, a.token === n && (i += w.length - 1), r = o.content, c = r.length, y.length = m;
                continue e;
              }
          }
          k ? y.push({
            token: n,
            pos: s.index,
            single: C,
            level: l
          }) : h10 && C && (o.content = Xe(o.content, s.index, Tn));
        }
    }
  }
}
var _P = function(e) {
  var n;
  if (e.md.options.typographer)
    for (n = e.tokens.length - 1; n >= 0; n--)
      e.tokens[n].type !== "inline" || !bP.test(e.tokens[n].content) || CP(e.tokens[n].children, e);
};
var kP = function(e) {
  var n, o, r, s, i, c, l = e.tokens;
  for (n = 0, o = l.length; n < o; n++)
    if (l[n].type === "inline") {
      for (r = l[n].children, i = r.length, s = 0; s < i; s++)
        r[s].type === "text_special" && (r[s].type = "text");
      for (s = c = 0; s < i; s++)
        r[s].type === "text" && s + 1 < i && r[s + 1].type === "text" ? r[s + 1].content = r[s].content + r[s + 1].content : (s !== c && (r[c] = r[s]), c++);
      s !== c && (r.length = c);
    }
};
function Me(t, e, n) {
  this.type = t, this.tag = e, this.attrs = null, this.map = null, this.nesting = n, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = false, this.hidden = false;
}
Me.prototype.attrIndex = function(e) {
  var n, o, r;
  if (!this.attrs)
    return -1;
  for (n = this.attrs, o = 0, r = n.length; o < r; o++)
    if (n[o][0] === e)
      return o;
  return -1;
};
Me.prototype.attrPush = function(e) {
  this.attrs ? this.attrs.push(e) : this.attrs = [e];
};
Me.prototype.attrSet = function(e, n) {
  var o = this.attrIndex(e), r = [e, n];
  o < 0 ? this.attrPush(r) : this.attrs[o] = r;
};
Me.prototype.attrGet = function(e) {
  var n = this.attrIndex(e), o = null;
  return n >= 0 && (o = this.attrs[n][1]), o;
};
Me.prototype.attrJoin = function(e, n) {
  var o = this.attrIndex(e);
  o < 0 ? this.attrPush([e, n]) : this.attrs[o][1] = this.attrs[o][1] + " " + n;
};
var Kt = Me;
var xP = Kt;
function So(t, e, n) {
  this.src = t, this.env = n, this.tokens = [], this.inlineMode = false, this.md = e;
}
So.prototype.Token = xP;
var yP = So;
var wP = Jt;
var At = [
  ["normalize", rP],
  ["block", sP],
  ["inline", cP],
  ["linkify", uP],
  ["replacements", gP],
  ["smartquotes", _P],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", kP]
];
function Yt() {
  this.ruler = new wP();
  for (var t = 0; t < At.length; t++)
    this.ruler.push(At[t][0], At[t][1]);
}
Yt.prototype.process = function(t) {
  var e, n, o;
  for (o = this.ruler.getRules(""), e = 0, n = o.length; e < n; e++)
    o[e](t);
};
Yt.prototype.State = yP;
var AP = Yt;
var Et = B.isSpace;
function Dt(t, e) {
  var n = t.bMarks[e] + t.tShift[e], o = t.eMarks[e];
  return t.src.slice(n, o);
}
function Fn(t) {
  var e = [], n = 0, o = t.length, r, s = false, i = 0, c = "";
  for (r = t.charCodeAt(n); n < o; )
    r === 124 && (s ? (c += t.substring(i, n - 1), i = n) : (e.push(c + t.substring(i, n)), c = "", i = n + 1)), s = r === 92, n++, r = t.charCodeAt(n);
  return e.push(c + t.substring(i)), e;
}
var EP = function(e, n, o, r) {
  var s, i, c, l, a, u, p, f, d, v, g, k, h10, m, C, y, w, b;
  if (n + 2 > o || (u = n + 1, e.sCount[u] < e.blkIndent) || e.sCount[u] - e.blkIndent >= 4 || (c = e.bMarks[u] + e.tShift[u], c >= e.eMarks[u]) || (w = e.src.charCodeAt(c++), w !== 124 && w !== 45 && w !== 58) || c >= e.eMarks[u] || (b = e.src.charCodeAt(c++), b !== 124 && b !== 45 && b !== 58 && !Et(b)) || w === 45 && Et(b))
    return false;
  for (; c < e.eMarks[u]; ) {
    if (s = e.src.charCodeAt(c), s !== 124 && s !== 45 && s !== 58 && !Et(s))
      return false;
    c++;
  }
  for (i = Dt(e, n + 1), p = i.split("|"), v = [], l = 0; l < p.length; l++) {
    if (g = p[l].trim(), !g) {
      if (l === 0 || l === p.length - 1)
        continue;
      return false;
    }
    if (!/^:?-+:?$/.test(g))
      return false;
    g.charCodeAt(g.length - 1) === 58 ? v.push(g.charCodeAt(0) === 58 ? "center" : "right") : g.charCodeAt(0) === 58 ? v.push("left") : v.push("");
  }
  if (i = Dt(e, n).trim(), i.indexOf("|") === -1 || e.sCount[n] - e.blkIndent >= 4 || (p = Fn(i), p.length && p[0] === "" && p.shift(), p.length && p[p.length - 1] === "" && p.pop(), f = p.length, f === 0 || f !== v.length))
    return false;
  if (r)
    return true;
  for (m = e.parentType, e.parentType = "table", y = e.md.block.ruler.getRules("blockquote"), d = e.push("table_open", "table", 1), d.map = k = [n, 0], d = e.push("thead_open", "thead", 1), d.map = [n, n + 1], d = e.push("tr_open", "tr", 1), d.map = [n, n + 1], l = 0; l < p.length; l++)
    d = e.push("th_open", "th", 1), v[l] && (d.attrs = [["style", "text-align:" + v[l]]]), d = e.push("inline", "", 0), d.content = p[l].trim(), d.children = [], d = e.push("th_close", "th", -1);
  for (d = e.push("tr_close", "tr", -1), d = e.push("thead_close", "thead", -1), u = n + 2; u < o && !(e.sCount[u] < e.blkIndent); u++) {
    for (C = false, l = 0, a = y.length; l < a; l++)
      if (y[l](e, u, o, true)) {
        C = true;
        break;
      }
    if (C || (i = Dt(e, u).trim(), !i) || e.sCount[u] - e.blkIndent >= 4)
      break;
    for (p = Fn(i), p.length && p[0] === "" && p.shift(), p.length && p[p.length - 1] === "" && p.pop(), u === n + 2 && (d = e.push("tbody_open", "tbody", 1), d.map = h10 = [n + 2, 0]), d = e.push("tr_open", "tr", 1), d.map = [u, u + 1], l = 0; l < f; l++)
      d = e.push("td_open", "td", 1), v[l] && (d.attrs = [["style", "text-align:" + v[l]]]), d = e.push("inline", "", 0), d.content = p[l] ? p[l].trim() : "", d.children = [], d = e.push("td_close", "td", -1);
    d = e.push("tr_close", "tr", -1);
  }
  return h10 && (d = e.push("tbody_close", "tbody", -1), h10[1] = u), d = e.push("table_close", "table", -1), k[1] = u, e.parentType = m, e.line = u, true;
};
var DP = function(e, n, o) {
  var r, s, i;
  if (e.sCount[n] - e.blkIndent < 4)
    return false;
  for (s = r = n + 1; r < o; ) {
    if (e.isEmpty(r)) {
      r++;
      continue;
    }
    if (e.sCount[r] - e.blkIndent >= 4) {
      r++, s = r;
      continue;
    }
    break;
  }
  return e.line = s, i = e.push("code_block", "code", 0), i.content = e.getLines(n, s, 4 + e.blkIndent, false) + `
`, i.map = [n, e.line], true;
};
var SP = function(e, n, o, r) {
  var s, i, c, l, a, u, p, f = false, d = e.bMarks[n] + e.tShift[n], v = e.eMarks[n];
  if (e.sCount[n] - e.blkIndent >= 4 || d + 3 > v || (s = e.src.charCodeAt(d), s !== 126 && s !== 96) || (a = d, d = e.skipChars(d, s), i = d - a, i < 3) || (p = e.src.slice(a, d), c = e.src.slice(d, v), s === 96 && c.indexOf(String.fromCharCode(s)) >= 0))
    return false;
  if (r)
    return true;
  for (l = n; l++, !(l >= o || (d = a = e.bMarks[l] + e.tShift[l], v = e.eMarks[l], d < v && e.sCount[l] < e.blkIndent)); )
    if (e.src.charCodeAt(d) === s && !(e.sCount[l] - e.blkIndent >= 4) && (d = e.skipChars(d, s), !(d - a < i) && (d = e.skipSpaces(d), !(d < v)))) {
      f = true;
      break;
    }
  return i = e.sCount[n], e.line = l + (f ? 1 : 0), u = e.push("fence", "code", 0), u.info = c, u.content = e.getLines(n + 1, l, i, true), u.markup = p, u.map = [n, e.line], true;
};
var Ln = B.isSpace;
var qP = function(e, n, o, r) {
  var s, i, c, l, a, u, p, f, d, v, g, k, h10, m, C, y, w, b, T, I, S = e.lineMax, x = e.bMarks[n] + e.tShift[n], A = e.eMarks[n];
  if (e.sCount[n] - e.blkIndent >= 4 || e.src.charCodeAt(x++) !== 62)
    return false;
  if (r)
    return true;
  for (l = d = e.sCount[n] + 1, e.src.charCodeAt(x) === 32 ? (x++, l++, d++, s = false, y = true) : e.src.charCodeAt(x) === 9 ? (y = true, (e.bsCount[n] + d) % 4 === 3 ? (x++, l++, d++, s = false) : s = true) : y = false, v = [e.bMarks[n]], e.bMarks[n] = x; x < A && (i = e.src.charCodeAt(x), Ln(i)); ) {
    i === 9 ? d += 4 - (d + e.bsCount[n] + (s ? 1 : 0)) % 4 : d++;
    x++;
  }
  for (g = [e.bsCount[n]], e.bsCount[n] = e.sCount[n] + 1 + (y ? 1 : 0), u = x >= A, m = [e.sCount[n]], e.sCount[n] = d - l, C = [e.tShift[n]], e.tShift[n] = x - e.bMarks[n], b = e.md.block.ruler.getRules("blockquote"), h10 = e.parentType, e.parentType = "blockquote", f = n + 1; f < o && (I = e.sCount[f] < e.blkIndent, x = e.bMarks[f] + e.tShift[f], A = e.eMarks[f], !(x >= A)); f++) {
    if (e.src.charCodeAt(x++) === 62 && !I) {
      for (l = d = e.sCount[f] + 1, e.src.charCodeAt(x) === 32 ? (x++, l++, d++, s = false, y = true) : e.src.charCodeAt(x) === 9 ? (y = true, (e.bsCount[f] + d) % 4 === 3 ? (x++, l++, d++, s = false) : s = true) : y = false, v.push(e.bMarks[f]), e.bMarks[f] = x; x < A && (i = e.src.charCodeAt(x), Ln(i)); ) {
        i === 9 ? d += 4 - (d + e.bsCount[f] + (s ? 1 : 0)) % 4 : d++;
        x++;
      }
      u = x >= A, g.push(e.bsCount[f]), e.bsCount[f] = e.sCount[f] + 1 + (y ? 1 : 0), m.push(e.sCount[f]), e.sCount[f] = d - l, C.push(e.tShift[f]), e.tShift[f] = x - e.bMarks[f];
      continue;
    }
    if (u)
      break;
    for (w = false, c = 0, a = b.length; c < a; c++)
      if (b[c](e, f, o, true)) {
        w = true;
        break;
      }
    if (w) {
      e.lineMax = f, e.blkIndent !== 0 && (v.push(e.bMarks[f]), g.push(e.bsCount[f]), C.push(e.tShift[f]), m.push(e.sCount[f]), e.sCount[f] -= e.blkIndent);
      break;
    }
    v.push(e.bMarks[f]), g.push(e.bsCount[f]), C.push(e.tShift[f]), m.push(e.sCount[f]), e.sCount[f] = -1;
  }
  for (k = e.blkIndent, e.blkIndent = 0, T = e.push("blockquote_open", "blockquote", 1), T.markup = ">", T.map = p = [n, 0], e.md.block.tokenize(e, n, f), T = e.push("blockquote_close", "blockquote", -1), T.markup = ">", e.lineMax = S, e.parentType = h10, p[1] = e.line, c = 0; c < C.length; c++)
    e.bMarks[c + n] = v[c], e.tShift[c + n] = C[c], e.sCount[c + n] = m[c], e.bsCount[c + n] = g[c];
  return e.blkIndent = k, true;
};
var TP = B.isSpace;
var FP = function(e, n, o, r) {
  var s, i, c, l, a = e.bMarks[n] + e.tShift[n], u = e.eMarks[n];
  if (e.sCount[n] - e.blkIndent >= 4 || (s = e.src.charCodeAt(a++), s !== 42 && s !== 45 && s !== 95))
    return false;
  for (i = 1; a < u; ) {
    if (c = e.src.charCodeAt(a++), c !== s && !TP(c))
      return false;
    c === s && i++;
  }
  return i < 3 ? false : (r || (e.line = n + 1, l = e.push("hr", "hr", 0), l.map = [n, e.line], l.markup = Array(i + 1).join(String.fromCharCode(s))), true);
};
var qo = B.isSpace;
function Rn(t, e) {
  var n, o, r, s;
  return o = t.bMarks[e] + t.tShift[e], r = t.eMarks[e], n = t.src.charCodeAt(o++), n !== 42 && n !== 45 && n !== 43 || o < r && (s = t.src.charCodeAt(o), !qo(s)) ? -1 : o;
}
function On(t, e) {
  var n, o = t.bMarks[e] + t.tShift[e], r = o, s = t.eMarks[e];
  if (r + 1 >= s || (n = t.src.charCodeAt(r++), n < 48 || n > 57))
    return -1;
  for (; ; ) {
    if (r >= s)
      return -1;
    if (n = t.src.charCodeAt(r++), n >= 48 && n <= 57) {
      if (r - o >= 10)
        return -1;
      continue;
    }
    if (n === 41 || n === 46)
      break;
    return -1;
  }
  return r < s && (n = t.src.charCodeAt(r), !qo(n)) ? -1 : r;
}
function LP(t, e) {
  var n, o, r = t.level + 2;
  for (n = e + 2, o = t.tokens.length - 2; n < o; n++)
    t.tokens[n].level === r && t.tokens[n].type === "paragraph_open" && (t.tokens[n + 2].hidden = true, t.tokens[n].hidden = true, n += 2);
}
var RP = function(e, n, o, r) {
  var s, i, c, l, a, u, p, f, d, v, g, k, h10, m, C, y, w, b, T, I, S, x, A, D, F, _, O, P, M = false, $ = true;
  if (e.sCount[n] - e.blkIndent >= 4 || e.listIndent >= 0 && e.sCount[n] - e.listIndent >= 4 && e.sCount[n] < e.blkIndent)
    return false;
  if (r && e.parentType === "paragraph" && e.sCount[n] >= e.blkIndent && (M = true), (A = On(e, n)) >= 0) {
    if (p = true, F = e.bMarks[n] + e.tShift[n], h10 = Number(e.src.slice(F, A - 1)), M && h10 !== 1)
      return false;
  } else if ((A = Rn(e, n)) >= 0)
    p = false;
  else
    return false;
  if (M && e.skipSpaces(A) >= e.eMarks[n])
    return false;
  if (k = e.src.charCodeAt(A - 1), r)
    return true;
  for (g = e.tokens.length, p ? (P = e.push("ordered_list_open", "ol", 1), h10 !== 1 && (P.attrs = [["start", h10]])) : P = e.push("bullet_list_open", "ul", 1), P.map = v = [n, 0], P.markup = String.fromCharCode(k), C = n, D = false, O = e.md.block.ruler.getRules("list"), b = e.parentType, e.parentType = "list"; C < o; ) {
    for (x = A, m = e.eMarks[C], u = y = e.sCount[C] + A - (e.bMarks[n] + e.tShift[n]); x < m; ) {
      if (s = e.src.charCodeAt(x), s === 9)
        y += 4 - (y + e.bsCount[C]) % 4;
      else if (s === 32)
        y++;
      else
        break;
      x++;
    }
    if (i = x, i >= m ? a = 1 : a = y - u, a > 4 && (a = 1), l = u + a, P = e.push("list_item_open", "li", 1), P.markup = String.fromCharCode(k), P.map = f = [n, 0], p && (P.info = e.src.slice(F, A - 1)), S = e.tight, I = e.tShift[n], T = e.sCount[n], w = e.listIndent, e.listIndent = e.blkIndent, e.blkIndent = l, e.tight = true, e.tShift[n] = i - e.bMarks[n], e.sCount[n] = y, i >= m && e.isEmpty(n + 1) ? e.line = Math.min(e.line + 2, o) : e.md.block.tokenize(e, n, o, true), (!e.tight || D) && ($ = false), D = e.line - n > 1 && e.isEmpty(e.line - 1), e.blkIndent = e.listIndent, e.listIndent = w, e.tShift[n] = I, e.sCount[n] = T, e.tight = S, P = e.push("list_item_close", "li", -1), P.markup = String.fromCharCode(k), C = n = e.line, f[1] = C, i = e.bMarks[n], C >= o || e.sCount[C] < e.blkIndent || e.sCount[n] - e.blkIndent >= 4)
      break;
    for (_ = false, c = 0, d = O.length; c < d; c++)
      if (O[c](e, C, o, true)) {
        _ = true;
        break;
      }
    if (_)
      break;
    if (p) {
      if (A = On(e, C), A < 0)
        break;
      F = e.bMarks[C] + e.tShift[C];
    } else if (A = Rn(e, C), A < 0)
      break;
    if (k !== e.src.charCodeAt(A - 1))
      break;
  }
  return p ? P = e.push("ordered_list_close", "ol", -1) : P = e.push("bullet_list_close", "ul", -1), P.markup = String.fromCharCode(k), v[1] = C, e.line = C, e.parentType = b, $ && LP(e, g), true;
};
var OP = B.normalizeReference;
var et = B.isSpace;
var PP = function(e, n, o, r) {
  var s, i, c, l, a, u, p, f, d, v, g, k, h10, m, C, y, w = 0, b = e.bMarks[n] + e.tShift[n], T = e.eMarks[n], I = n + 1;
  if (e.sCount[n] - e.blkIndent >= 4 || e.src.charCodeAt(b) !== 91)
    return false;
  for (; ++b < T; )
    if (e.src.charCodeAt(b) === 93 && e.src.charCodeAt(b - 1) !== 92) {
      if (b + 1 === T || e.src.charCodeAt(b + 1) !== 58)
        return false;
      break;
    }
  for (l = e.lineMax, C = e.md.block.ruler.getRules("reference"), v = e.parentType, e.parentType = "reference"; I < l && !e.isEmpty(I); I++)
    if (!(e.sCount[I] - e.blkIndent > 3) && !(e.sCount[I] < 0)) {
      for (m = false, u = 0, p = C.length; u < p; u++)
        if (C[u](e, I, l, true)) {
          m = true;
          break;
        }
      if (m)
        break;
    }
  for (h10 = e.getLines(n, I, e.blkIndent, false).trim(), T = h10.length, b = 1; b < T; b++) {
    if (s = h10.charCodeAt(b), s === 91)
      return false;
    if (s === 93) {
      d = b;
      break;
    } else
      s === 10 ? w++ : s === 92 && (b++, b < T && h10.charCodeAt(b) === 10 && w++);
  }
  if (d < 0 || h10.charCodeAt(d + 1) !== 58)
    return false;
  for (b = d + 2; b < T; b++)
    if (s = h10.charCodeAt(b), s === 10)
      w++;
    else if (!et(s))
      break;
  if (g = e.md.helpers.parseLinkDestination(h10, b, T), !g.ok || (a = e.md.normalizeLink(g.str), !e.md.validateLink(a)))
    return false;
  for (b = g.pos, w += g.lines, i = b, c = w, k = b; b < T; b++)
    if (s = h10.charCodeAt(b), s === 10)
      w++;
    else if (!et(s))
      break;
  for (g = e.md.helpers.parseLinkTitle(h10, b, T), b < T && k !== b && g.ok ? (y = g.str, b = g.pos, w += g.lines) : (y = "", b = i, w = c); b < T && (s = h10.charCodeAt(b), !!et(s)); )
    b++;
  if (b < T && h10.charCodeAt(b) !== 10 && y)
    for (y = "", b = i, w = c; b < T && (s = h10.charCodeAt(b), !!et(s)); )
      b++;
  return b < T && h10.charCodeAt(b) !== 10 || (f = OP(h10.slice(1, d)), !f) ? false : (r || (typeof e.env.references > "u" && (e.env.references = {}), typeof e.env.references[f] > "u" && (e.env.references[f] = { title: y, href: a }), e.parentType = v, e.line = n + w + 1), true);
};
var IP = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "section",
  "source",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
];
var ft = {};
var MP = "[a-zA-Z_:][a-zA-Z0-9:._-]*";
var BP = "[^\"'=<>`\\x00-\\x20]+";
var NP = "'[^']*'";
var $P = '"[^"]*"';
var zP = "(?:" + BP + "|" + NP + "|" + $P + ")";
var VP = "(?:\\s+" + MP + "(?:\\s*=\\s*" + zP + ")?)";
var To = "<[A-Za-z][A-Za-z0-9\\-]*" + VP + "*\\s*\\/?>";
var Fo = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";
var jP = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->";
var UP = "<[?][\\s\\S]*?[?]>";
var HP = "<![A-Z]+\\s+[^>]*>";
var GP = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>";
var ZP = new RegExp("^(?:" + To + "|" + Fo + "|" + jP + "|" + UP + "|" + HP + "|" + GP + ")");
var WP = new RegExp("^(?:" + To + "|" + Fo + ")");
ft.HTML_TAG_RE = ZP;
ft.HTML_OPEN_CLOSE_TAG_RE = WP;
var JP = IP;
var KP = ft.HTML_OPEN_CLOSE_TAG_RE;
var Te = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, true],
  [/^<!--/, /-->/, true],
  [/^<\?/, /\?>/, true],
  [/^<![A-Z]/, />/, true],
  [/^<!\[CDATA\[/, /\]\]>/, true],
  [new RegExp("^</?(" + JP.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, true],
  [new RegExp(KP.source + "\\s*$"), /^$/, false]
];
var YP = function(e, n, o, r) {
  var s, i, c, l, a = e.bMarks[n] + e.tShift[n], u = e.eMarks[n];
  if (e.sCount[n] - e.blkIndent >= 4 || !e.md.options.html || e.src.charCodeAt(a) !== 60)
    return false;
  for (l = e.src.slice(a, u), s = 0; s < Te.length && !Te[s][0].test(l); s++)
    ;
  if (s === Te.length)
    return false;
  if (r)
    return Te[s][2];
  if (i = n + 1, !Te[s][1].test(l)) {
    for (; i < o && !(e.sCount[i] < e.blkIndent); i++)
      if (a = e.bMarks[i] + e.tShift[i], u = e.eMarks[i], l = e.src.slice(a, u), Te[s][1].test(l)) {
        l.length !== 0 && i++;
        break;
      }
  }
  return e.line = i, c = e.push("html_block", "", 0), c.map = [n, i], c.content = e.getLines(n, i, e.blkIndent, true), true;
};
var Pn = B.isSpace;
var QP = function(e, n, o, r) {
  var s, i, c, l, a = e.bMarks[n] + e.tShift[n], u = e.eMarks[n];
  if (e.sCount[n] - e.blkIndent >= 4 || (s = e.src.charCodeAt(a), s !== 35 || a >= u))
    return false;
  for (i = 1, s = e.src.charCodeAt(++a); s === 35 && a < u && i <= 6; )
    i++, s = e.src.charCodeAt(++a);
  return i > 6 || a < u && !Pn(s) ? false : (r || (u = e.skipSpacesBack(u, a), c = e.skipCharsBack(u, 35, a), c > a && Pn(e.src.charCodeAt(c - 1)) && (u = c), e.line = n + 1, l = e.push("heading_open", "h" + String(i), 1), l.markup = "########".slice(0, i), l.map = [n, e.line], l = e.push("inline", "", 0), l.content = e.src.slice(a, u).trim(), l.map = [n, e.line], l.children = [], l = e.push("heading_close", "h" + String(i), -1), l.markup = "########".slice(0, i)), true);
};
var XP = function(e, n, o) {
  var r, s, i, c, l, a, u, p, f, d = n + 1, v, g = e.md.block.ruler.getRules("paragraph");
  if (e.sCount[n] - e.blkIndent >= 4)
    return false;
  for (v = e.parentType, e.parentType = "paragraph"; d < o && !e.isEmpty(d); d++)
    if (!(e.sCount[d] - e.blkIndent > 3)) {
      if (e.sCount[d] >= e.blkIndent && (a = e.bMarks[d] + e.tShift[d], u = e.eMarks[d], a < u && (f = e.src.charCodeAt(a), (f === 45 || f === 61) && (a = e.skipChars(a, f), a = e.skipSpaces(a), a >= u)))) {
        p = f === 61 ? 1 : 2;
        break;
      }
      if (!(e.sCount[d] < 0)) {
        for (s = false, i = 0, c = g.length; i < c; i++)
          if (g[i](e, d, o, true)) {
            s = true;
            break;
          }
        if (s)
          break;
      }
    }
  return p ? (r = e.getLines(n, d, e.blkIndent, false).trim(), e.line = d + 1, l = e.push("heading_open", "h" + String(p), 1), l.markup = String.fromCharCode(f), l.map = [n, e.line], l = e.push("inline", "", 0), l.content = r, l.map = [n, e.line - 1], l.children = [], l = e.push("heading_close", "h" + String(p), -1), l.markup = String.fromCharCode(f), e.parentType = v, true) : false;
};
var eI = function(e, n) {
  var o, r, s, i, c, l, a = n + 1, u = e.md.block.ruler.getRules("paragraph"), p = e.lineMax;
  for (l = e.parentType, e.parentType = "paragraph"; a < p && !e.isEmpty(a); a++)
    if (!(e.sCount[a] - e.blkIndent > 3) && !(e.sCount[a] < 0)) {
      for (r = false, s = 0, i = u.length; s < i; s++)
        if (u[s](e, a, p, true)) {
          r = true;
          break;
        }
      if (r)
        break;
    }
  return o = e.getLines(n, a, e.blkIndent, false).trim(), e.line = a, c = e.push("paragraph_open", "p", 1), c.map = [n, e.line], c = e.push("inline", "", 0), c.content = o, c.map = [n, e.line], c.children = [], c = e.push("paragraph_close", "p", -1), e.parentType = l, true;
};
var Lo = Kt;
var dt = B.isSpace;
function fe(t, e, n, o) {
  var r, s, i, c, l, a, u, p;
  for (this.src = t, this.md = e, this.env = n, this.tokens = o, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = false, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0, this.result = "", s = this.src, p = false, i = c = a = u = 0, l = s.length; c < l; c++) {
    if (r = s.charCodeAt(c), !p)
      if (dt(r)) {
        a++, r === 9 ? u += 4 - u % 4 : u++;
        continue;
      } else
        p = true;
    (r === 10 || c === l - 1) && (r !== 10 && c++, this.bMarks.push(i), this.eMarks.push(c), this.tShift.push(a), this.sCount.push(u), this.bsCount.push(0), p = false, a = 0, u = 0, i = c + 1);
  }
  this.bMarks.push(s.length), this.eMarks.push(s.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
fe.prototype.push = function(t, e, n) {
  var o = new Lo(t, e, n);
  return o.block = true, n < 0 && this.level--, o.level = this.level, n > 0 && this.level++, this.tokens.push(o), o;
};
fe.prototype.isEmpty = function(e) {
  return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
};
fe.prototype.skipEmptyLines = function(e) {
  for (var n = this.lineMax; e < n && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++)
    ;
  return e;
};
fe.prototype.skipSpaces = function(e) {
  for (var n, o = this.src.length; e < o && (n = this.src.charCodeAt(e), !!dt(n)); e++)
    ;
  return e;
};
fe.prototype.skipSpacesBack = function(e, n) {
  if (e <= n)
    return e;
  for (; e > n; )
    if (!dt(this.src.charCodeAt(--e)))
      return e + 1;
  return e;
};
fe.prototype.skipChars = function(e, n) {
  for (var o = this.src.length; e < o && this.src.charCodeAt(e) === n; e++)
    ;
  return e;
};
fe.prototype.skipCharsBack = function(e, n, o) {
  if (e <= o)
    return e;
  for (; e > o; )
    if (n !== this.src.charCodeAt(--e))
      return e + 1;
  return e;
};
fe.prototype.getLines = function(e, n, o, r) {
  var s, i, c, l, a, u, p, f = e;
  if (e >= n)
    return "";
  for (u = new Array(n - e), s = 0; f < n; f++, s++) {
    for (i = 0, p = l = this.bMarks[f], f + 1 < n || r ? a = this.eMarks[f] + 1 : a = this.eMarks[f]; l < a && i < o; ) {
      if (c = this.src.charCodeAt(l), dt(c))
        c === 9 ? i += 4 - (i + this.bsCount[f]) % 4 : i++;
      else if (l - p < this.tShift[f])
        i++;
      else
        break;
      l++;
    }
    i > o ? u[s] = new Array(i - o + 1).join(" ") + this.src.slice(l, a) : u[s] = this.src.slice(l, a);
  }
  return u.join("");
};
fe.prototype.Token = Lo;
var tI = fe;
var nI = Jt;
var tt = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", EP, ["paragraph", "reference"]],
  ["code", DP],
  ["fence", SP, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", qP, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", FP, ["paragraph", "reference", "blockquote", "list"]],
  ["list", RP, ["paragraph", "reference", "blockquote"]],
  ["reference", PP],
  ["html_block", YP, ["paragraph", "reference", "blockquote"]],
  ["heading", QP, ["paragraph", "reference", "blockquote"]],
  ["lheading", XP],
  ["paragraph", eI]
];
function ht() {
  this.ruler = new nI();
  for (var t = 0; t < tt.length; t++)
    this.ruler.push(tt[t][0], tt[t][1], { alt: (tt[t][2] || []).slice() });
}
ht.prototype.tokenize = function(t, e, n) {
  for (var o, r, s = this.ruler.getRules(""), i = s.length, c = e, l = false, a = t.md.options.maxNesting; c < n && (t.line = c = t.skipEmptyLines(c), !(c >= n || t.sCount[c] < t.blkIndent)); ) {
    if (t.level >= a) {
      t.line = n;
      break;
    }
    for (r = 0; r < i && (o = s[r](t, c, n, false), !o); r++)
      ;
    t.tight = !l, t.isEmpty(t.line - 1) && (l = true), c = t.line, c < n && t.isEmpty(c) && (l = true, c++, t.line = c);
  }
};
ht.prototype.parse = function(t, e, n, o) {
  var r;
  t && (r = new this.State(t, e, n, o), this.tokenize(r, r.line, r.lineMax));
};
ht.prototype.State = tI;
var oI = ht;
function rI(t) {
  switch (t) {
    case 10:
    case 33:
    case 35:
    case 36:
    case 37:
    case 38:
    case 42:
    case 43:
    case 45:
    case 58:
    case 60:
    case 61:
    case 62:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 125:
    case 126:
      return true;
    default:
      return false;
  }
}
var sI = function(e, n) {
  for (var o = e.pos; o < e.posMax && !rI(e.src.charCodeAt(o)); )
    o++;
  return o === e.pos ? false : (n || (e.pending += e.src.slice(e.pos, o)), e.pos = o, true);
};
var cI = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
var iI = function(e, n) {
  var o, r, s, i, c, l, a, u;
  return !e.md.options.linkify || e.linkLevel > 0 || (o = e.pos, r = e.posMax, o + 3 > r) || e.src.charCodeAt(o) !== 58 || e.src.charCodeAt(o + 1) !== 47 || e.src.charCodeAt(o + 2) !== 47 || (s = e.pending.match(cI), !s) || (i = s[1], c = e.md.linkify.matchAtStart(e.src.slice(o - i.length)), !c) || (l = c.url, l = l.replace(/\*+$/, ""), a = e.md.normalizeLink(l), !e.md.validateLink(a)) ? false : (n || (e.pending = e.pending.slice(0, -i.length), u = e.push("link_open", "a", 1), u.attrs = [["href", a]], u.markup = "linkify", u.info = "auto", u = e.push("text", "", 0), u.content = e.md.normalizeLinkText(l), u = e.push("link_close", "a", -1), u.markup = "linkify", u.info = "auto"), e.pos += l.length - i.length, true);
};
var lI = B.isSpace;
var aI = function(e, n) {
  var o, r, s, i = e.pos;
  if (e.src.charCodeAt(i) !== 10)
    return false;
  if (o = e.pending.length - 1, r = e.posMax, !n)
    if (o >= 0 && e.pending.charCodeAt(o) === 32)
      if (o >= 1 && e.pending.charCodeAt(o - 1) === 32) {
        for (s = o - 1; s >= 1 && e.pending.charCodeAt(s - 1) === 32; )
          s--;
        e.pending = e.pending.slice(0, s), e.push("hardbreak", "br", 0);
      } else
        e.pending = e.pending.slice(0, -1), e.push("softbreak", "br", 0);
    else
      e.push("softbreak", "br", 0);
  for (i++; i < r && lI(e.src.charCodeAt(i)); )
    i++;
  return e.pos = i, true;
};
var uI = B.isSpace;
var Qt = [];
for (In = 0; In < 256; In++)
  Qt.push(0);
var In;
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(t) {
  Qt[t.charCodeAt(0)] = 1;
});
var pI = function(e, n) {
  var o, r, s, i, c, l = e.pos, a = e.posMax;
  if (e.src.charCodeAt(l) !== 92 || (l++, l >= a))
    return false;
  if (o = e.src.charCodeAt(l), o === 10) {
    for (n || e.push("hardbreak", "br", 0), l++; l < a && (o = e.src.charCodeAt(l), !!uI(o)); )
      l++;
    return e.pos = l, true;
  }
  return i = e.src[l], o >= 55296 && o <= 56319 && l + 1 < a && (r = e.src.charCodeAt(l + 1), r >= 56320 && r <= 57343 && (i += e.src[l + 1], l++)), s = "\\" + i, n || (c = e.push("text_special", "", 0), o < 256 && Qt[o] !== 0 ? c.content = i : c.content = s, c.markup = s, c.info = "escape"), e.pos = l + 1, true;
};
var fI = function(e, n) {
  var o, r, s, i, c, l, a, u, p = e.pos, f = e.src.charCodeAt(p);
  if (f !== 96)
    return false;
  for (o = p, p++, r = e.posMax; p < r && e.src.charCodeAt(p) === 96; )
    p++;
  if (s = e.src.slice(o, p), a = s.length, e.backticksScanned && (e.backticks[a] || 0) <= o)
    return n || (e.pending += s), e.pos += a, true;
  for (c = l = p; (c = e.src.indexOf("`", l)) !== -1; ) {
    for (l = c + 1; l < r && e.src.charCodeAt(l) === 96; )
      l++;
    if (u = l - c, u === a)
      return n || (i = e.push("code_inline", "code", 0), i.markup = s, i.content = e.src.slice(p, c).replace(/\n/g, " ").replace(/^ (.+) $/, "$1")), e.pos = l, true;
    e.backticks[u] = c;
  }
  return e.backticksScanned = true, n || (e.pending += s), e.pos += a, true;
};
var mt = {};
mt.tokenize = function(e, n) {
  var o, r, s, i, c, l = e.pos, a = e.src.charCodeAt(l);
  if (n || a !== 126 || (r = e.scanDelims(e.pos, true), i = r.length, c = String.fromCharCode(a), i < 2))
    return false;
  for (i % 2 && (s = e.push("text", "", 0), s.content = c, i--), o = 0; o < i; o += 2)
    s = e.push("text", "", 0), s.content = c + c, e.delimiters.push({
      marker: a,
      length: 0,
      // disable "rule of 3" length checks meant for emphasis
      token: e.tokens.length - 1,
      end: -1,
      open: r.can_open,
      close: r.can_close
    });
  return e.pos += r.length, true;
};
function Mn(t, e) {
  var n, o, r, s, i, c = [], l = e.length;
  for (n = 0; n < l; n++)
    r = e[n], r.marker === 126 && r.end !== -1 && (s = e[r.end], i = t.tokens[r.token], i.type = "s_open", i.tag = "s", i.nesting = 1, i.markup = "~~", i.content = "", i = t.tokens[s.token], i.type = "s_close", i.tag = "s", i.nesting = -1, i.markup = "~~", i.content = "", t.tokens[s.token - 1].type === "text" && t.tokens[s.token - 1].content === "~" && c.push(s.token - 1));
  for (; c.length; ) {
    for (n = c.pop(), o = n + 1; o < t.tokens.length && t.tokens[o].type === "s_close"; )
      o++;
    o--, n !== o && (i = t.tokens[o], t.tokens[o] = t.tokens[n], t.tokens[n] = i);
  }
}
mt.postProcess = function(e) {
  var n, o = e.tokens_meta, r = e.tokens_meta.length;
  for (Mn(e, e.delimiters), n = 0; n < r; n++)
    o[n] && o[n].delimiters && Mn(e, o[n].delimiters);
};
var vt = {};
vt.tokenize = function(e, n) {
  var o, r, s, i = e.pos, c = e.src.charCodeAt(i);
  if (n || c !== 95 && c !== 42)
    return false;
  for (r = e.scanDelims(e.pos, c === 42), o = 0; o < r.length; o++)
    s = e.push("text", "", 0), s.content = String.fromCharCode(c), e.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker: c,
      // Total length of these series of delimiters.
      //
      length: r.length,
      // A position of the token this delimiter corresponds to.
      //
      token: e.tokens.length - 1,
      // If this delimiter is matched as a valid opener, `end` will be
      // equal to its position, otherwise it's `-1`.
      //
      end: -1,
      // Boolean flags that determine if this delimiter could open or close
      // an emphasis.
      //
      open: r.can_open,
      close: r.can_close
    });
  return e.pos += r.length, true;
};
function Bn(t, e) {
  var n, o, r, s, i, c, l = e.length;
  for (n = l - 1; n >= 0; n--)
    o = e[n], !(o.marker !== 95 && o.marker !== 42) && o.end !== -1 && (r = e[o.end], c = n > 0 && e[n - 1].end === o.end + 1 && // check that first two markers match and adjacent
    e[n - 1].marker === o.marker && e[n - 1].token === o.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
    e[o.end + 1].token === r.token + 1, i = String.fromCharCode(o.marker), s = t.tokens[o.token], s.type = c ? "strong_open" : "em_open", s.tag = c ? "strong" : "em", s.nesting = 1, s.markup = c ? i + i : i, s.content = "", s = t.tokens[r.token], s.type = c ? "strong_close" : "em_close", s.tag = c ? "strong" : "em", s.nesting = -1, s.markup = c ? i + i : i, s.content = "", c && (t.tokens[e[n - 1].token].content = "", t.tokens[e[o.end + 1].token].content = "", n--));
}
vt.postProcess = function(e) {
  var n, o = e.tokens_meta, r = e.tokens_meta.length;
  for (Bn(e, e.delimiters), n = 0; n < r; n++)
    o[n] && o[n].delimiters && Bn(e, o[n].delimiters);
};
var dI = B.normalizeReference;
var St = B.isSpace;
var hI = function(e, n) {
  var o, r, s, i, c, l, a, u, p, f = "", d = "", v = e.pos, g = e.posMax, k = e.pos, h10 = true;
  if (e.src.charCodeAt(e.pos) !== 91 || (c = e.pos + 1, i = e.md.helpers.parseLinkLabel(e, e.pos, true), i < 0))
    return false;
  if (l = i + 1, l < g && e.src.charCodeAt(l) === 40) {
    for (h10 = false, l++; l < g && (r = e.src.charCodeAt(l), !(!St(r) && r !== 10)); l++)
      ;
    if (l >= g)
      return false;
    if (k = l, a = e.md.helpers.parseLinkDestination(e.src, l, e.posMax), a.ok) {
      for (f = e.md.normalizeLink(a.str), e.md.validateLink(f) ? l = a.pos : f = "", k = l; l < g && (r = e.src.charCodeAt(l), !(!St(r) && r !== 10)); l++)
        ;
      if (a = e.md.helpers.parseLinkTitle(e.src, l, e.posMax), l < g && k !== l && a.ok)
        for (d = a.str, l = a.pos; l < g && (r = e.src.charCodeAt(l), !(!St(r) && r !== 10)); l++)
          ;
    }
    (l >= g || e.src.charCodeAt(l) !== 41) && (h10 = true), l++;
  }
  if (h10) {
    if (typeof e.env.references > "u")
      return false;
    if (l < g && e.src.charCodeAt(l) === 91 ? (k = l + 1, l = e.md.helpers.parseLinkLabel(e, l), l >= 0 ? s = e.src.slice(k, l++) : l = i + 1) : l = i + 1, s || (s = e.src.slice(c, i)), u = e.env.references[dI(s)], !u)
      return e.pos = v, false;
    f = u.href, d = u.title;
  }
  return n || (e.pos = c, e.posMax = i, p = e.push("link_open", "a", 1), p.attrs = o = [["href", f]], d && o.push(["title", d]), e.linkLevel++, e.md.inline.tokenize(e), e.linkLevel--, p = e.push("link_close", "a", -1)), e.pos = l, e.posMax = g, true;
};
var mI = B.normalizeReference;
var qt = B.isSpace;
var vI = function(e, n) {
  var o, r, s, i, c, l, a, u, p, f, d, v, g, k = "", h10 = e.pos, m = e.posMax;
  if (e.src.charCodeAt(e.pos) !== 33 || e.src.charCodeAt(e.pos + 1) !== 91 || (l = e.pos + 2, c = e.md.helpers.parseLinkLabel(e, e.pos + 1, false), c < 0))
    return false;
  if (a = c + 1, a < m && e.src.charCodeAt(a) === 40) {
    for (a++; a < m && (r = e.src.charCodeAt(a), !(!qt(r) && r !== 10)); a++)
      ;
    if (a >= m)
      return false;
    for (g = a, p = e.md.helpers.parseLinkDestination(e.src, a, e.posMax), p.ok && (k = e.md.normalizeLink(p.str), e.md.validateLink(k) ? a = p.pos : k = ""), g = a; a < m && (r = e.src.charCodeAt(a), !(!qt(r) && r !== 10)); a++)
      ;
    if (p = e.md.helpers.parseLinkTitle(e.src, a, e.posMax), a < m && g !== a && p.ok)
      for (f = p.str, a = p.pos; a < m && (r = e.src.charCodeAt(a), !(!qt(r) && r !== 10)); a++)
        ;
    else
      f = "";
    if (a >= m || e.src.charCodeAt(a) !== 41)
      return e.pos = h10, false;
    a++;
  } else {
    if (typeof e.env.references > "u")
      return false;
    if (a < m && e.src.charCodeAt(a) === 91 ? (g = a + 1, a = e.md.helpers.parseLinkLabel(e, a), a >= 0 ? i = e.src.slice(g, a++) : a = c + 1) : a = c + 1, i || (i = e.src.slice(l, c)), u = e.env.references[mI(i)], !u)
      return e.pos = h10, false;
    k = u.href, f = u.title;
  }
  return n || (s = e.src.slice(l, c), e.md.inline.parse(
    s,
    e.md,
    e.env,
    v = []
  ), d = e.push("image", "img", 0), d.attrs = o = [["src", k], ["alt", ""]], d.children = v, d.content = s, f && o.push(["title", f])), e.pos = a, e.posMax = m, true;
};
var gI = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/;
var bI = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;
var CI = function(e, n) {
  var o, r, s, i, c, l, a = e.pos;
  if (e.src.charCodeAt(a) !== 60)
    return false;
  for (c = e.pos, l = e.posMax; ; ) {
    if (++a >= l || (i = e.src.charCodeAt(a), i === 60))
      return false;
    if (i === 62)
      break;
  }
  return o = e.src.slice(c + 1, a), bI.test(o) ? (r = e.md.normalizeLink(o), e.md.validateLink(r) ? (n || (s = e.push("link_open", "a", 1), s.attrs = [["href", r]], s.markup = "autolink", s.info = "auto", s = e.push("text", "", 0), s.content = e.md.normalizeLinkText(o), s = e.push("link_close", "a", -1), s.markup = "autolink", s.info = "auto"), e.pos += o.length + 2, true) : false) : gI.test(o) ? (r = e.md.normalizeLink("mailto:" + o), e.md.validateLink(r) ? (n || (s = e.push("link_open", "a", 1), s.attrs = [["href", r]], s.markup = "autolink", s.info = "auto", s = e.push("text", "", 0), s.content = e.md.normalizeLinkText(o), s = e.push("link_close", "a", -1), s.markup = "autolink", s.info = "auto"), e.pos += o.length + 2, true) : false) : false;
};
var _I = ft.HTML_TAG_RE;
function kI(t) {
  return /^<a[>\s]/i.test(t);
}
function xI(t) {
  return /^<\/a\s*>/i.test(t);
}
function yI(t) {
  var e = t | 32;
  return e >= 97 && e <= 122;
}
var wI = function(e, n) {
  var o, r, s, i, c = e.pos;
  return !e.md.options.html || (s = e.posMax, e.src.charCodeAt(c) !== 60 || c + 2 >= s) || (o = e.src.charCodeAt(c + 1), o !== 33 && o !== 63 && o !== 47 && !yI(o)) || (r = e.src.slice(c).match(_I), !r) ? false : (n || (i = e.push("html_inline", "", 0), i.content = e.src.slice(c, c + r[0].length), kI(i.content) && e.linkLevel++, xI(i.content) && e.linkLevel--), e.pos += r[0].length, true);
};
var Nn = yo;
var AI = B.has;
var EI = B.isValidEntityCode;
var $n = B.fromCodePoint;
var DI = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i;
var SI = /^&([a-z][a-z0-9]{1,31});/i;
var qI = function(e, n) {
  var o, r, s, i, c = e.pos, l = e.posMax;
  if (e.src.charCodeAt(c) !== 38 || c + 1 >= l)
    return false;
  if (o = e.src.charCodeAt(c + 1), o === 35) {
    if (s = e.src.slice(c).match(DI), s)
      return n || (r = s[1][0].toLowerCase() === "x" ? parseInt(s[1].slice(1), 16) : parseInt(s[1], 10), i = e.push("text_special", "", 0), i.content = EI(r) ? $n(r) : $n(65533), i.markup = s[0], i.info = "entity"), e.pos += s[0].length, true;
  } else if (s = e.src.slice(c).match(SI), s && AI(Nn, s[1]))
    return n || (i = e.push("text_special", "", 0), i.content = Nn[s[1]], i.markup = s[0], i.info = "entity"), e.pos += s[0].length, true;
  return false;
};
function zn(t, e) {
  var n, o, r, s, i, c, l, a, u = {}, p = e.length;
  if (p) {
    var f = 0, d = -2, v = [];
    for (n = 0; n < p; n++)
      if (r = e[n], v.push(0), (e[f].marker !== r.marker || d !== r.token - 1) && (f = n), d = r.token, r.length = r.length || 0, !!r.close) {
        for (u.hasOwnProperty(r.marker) || (u[r.marker] = [-1, -1, -1, -1, -1, -1]), i = u[r.marker][(r.open ? 3 : 0) + r.length % 3], o = f - v[f] - 1, c = o; o > i; o -= v[o] + 1)
          if (s = e[o], s.marker === r.marker && s.open && s.end < 0 && (l = false, (s.close || r.open) && (s.length + r.length) % 3 === 0 && (s.length % 3 !== 0 || r.length % 3 !== 0) && (l = true), !l)) {
            a = o > 0 && !e[o - 1].open ? v[o - 1] + 1 : 0, v[n] = n - o + a, v[o] = a, r.open = false, s.end = n, s.close = false, c = -1, d = -2;
            break;
          }
        c !== -1 && (u[r.marker][(r.open ? 3 : 0) + (r.length || 0) % 3] = c);
      }
  }
}
var TI = function(e) {
  var n, o = e.tokens_meta, r = e.tokens_meta.length;
  for (zn(e, e.delimiters), n = 0; n < r; n++)
    o[n] && o[n].delimiters && zn(e, o[n].delimiters);
};
var FI = function(e) {
  var n, o, r = 0, s = e.tokens, i = e.tokens.length;
  for (n = o = 0; n < i; n++)
    s[n].nesting < 0 && r--, s[n].level = r, s[n].nesting > 0 && r++, s[n].type === "text" && n + 1 < i && s[n + 1].type === "text" ? s[n + 1].content = s[n].content + s[n + 1].content : (n !== o && (s[o] = s[n]), o++);
  n !== o && (s.length = o);
};
var Xt = Kt;
var Vn = B.isWhiteSpace;
var jn = B.isPunctChar;
var Un = B.isMdAsciiPunct;
function Ze(t, e, n, o) {
  this.src = t, this.env = n, this.md = e, this.tokens = o, this.tokens_meta = Array(o.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = false, this.linkLevel = 0;
}
Ze.prototype.pushPending = function() {
  var t = new Xt("text", "", 0);
  return t.content = this.pending, t.level = this.pendingLevel, this.tokens.push(t), this.pending = "", t;
};
Ze.prototype.push = function(t, e, n) {
  this.pending && this.pushPending();
  var o = new Xt(t, e, n), r = null;
  return n < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), o.level = this.level, n > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], r = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(o), this.tokens_meta.push(r), o;
};
Ze.prototype.scanDelims = function(t, e) {
  var n = t, o, r, s, i, c, l, a, u, p, f = true, d = true, v = this.posMax, g = this.src.charCodeAt(t);
  for (o = t > 0 ? this.src.charCodeAt(t - 1) : 32; n < v && this.src.charCodeAt(n) === g; )
    n++;
  return s = n - t, r = n < v ? this.src.charCodeAt(n) : 32, a = Un(o) || jn(String.fromCharCode(o)), p = Un(r) || jn(String.fromCharCode(r)), l = Vn(o), u = Vn(r), u ? f = false : p && (l || a || (f = false)), l ? d = false : a && (u || p || (d = false)), e ? (i = f, c = d) : (i = f && (!d || a), c = d && (!f || p)), {
    can_open: i,
    can_close: c,
    length: s
  };
};
Ze.prototype.Token = Xt;
var LI = Ze;
var Hn = Jt;
var Tt = [
  ["text", sI],
  ["linkify", iI],
  ["newline", aI],
  ["escape", pI],
  ["backticks", fI],
  ["strikethrough", mt.tokenize],
  ["emphasis", vt.tokenize],
  ["link", hI],
  ["image", vI],
  ["autolink", CI],
  ["html_inline", wI],
  ["entity", qI]
];
var Ft = [
  ["balance_pairs", TI],
  ["strikethrough", mt.postProcess],
  ["emphasis", vt.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", FI]
];
function We() {
  var t;
  for (this.ruler = new Hn(), t = 0; t < Tt.length; t++)
    this.ruler.push(Tt[t][0], Tt[t][1]);
  for (this.ruler2 = new Hn(), t = 0; t < Ft.length; t++)
    this.ruler2.push(Ft[t][0], Ft[t][1]);
}
We.prototype.skipToken = function(t) {
  var e, n, o = t.pos, r = this.ruler.getRules(""), s = r.length, i = t.md.options.maxNesting, c = t.cache;
  if (typeof c[o] < "u") {
    t.pos = c[o];
    return;
  }
  if (t.level < i)
    for (n = 0; n < s && (t.level++, e = r[n](t, true), t.level--, !e); n++)
      ;
  else
    t.pos = t.posMax;
  e || t.pos++, c[o] = t.pos;
};
We.prototype.tokenize = function(t) {
  for (var e, n, o = this.ruler.getRules(""), r = o.length, s = t.posMax, i = t.md.options.maxNesting; t.pos < s; ) {
    if (t.level < i)
      for (n = 0; n < r && (e = o[n](t, false), !e); n++)
        ;
    if (e) {
      if (t.pos >= s)
        break;
      continue;
    }
    t.pending += t.src[t.pos++];
  }
  t.pending && t.pushPending();
};
We.prototype.parse = function(t, e, n, o) {
  var r, s, i, c = new this.State(t, e, n, o);
  for (this.tokenize(c), s = this.ruler2.getRules(""), i = s.length, r = 0; r < i; r++)
    s[r](c);
};
We.prototype.State = LI;
var RI = We;
var Lt;
var Gn;
function OI() {
  return Gn || (Gn = 1, Lt = function(t) {
    var e = {};
    t = t || {}, e.src_Any = wo().source, e.src_Cc = Ao().source, e.src_Z = Eo().source, e.src_P = Wt.source, e.src_ZPCc = [e.src_Z, e.src_P, e.src_Cc].join("|"), e.src_ZCc = [e.src_Z, e.src_Cc].join("|");
    var n = "[><｜]";
    return e.src_pseudo_letter = "(?:(?!" + n + "|" + e.src_ZPCc + ")" + e.src_Any + ")", e.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", e.src_auth = "(?:(?:(?!" + e.src_ZCc + "|[@/\\[\\]()]).)+@)?", e.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", e.src_host_terminator = "(?=$|" + n + "|" + e.src_ZPCc + ")(?!" + (t["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + e.src_ZPCc + "))", e.src_path = "(?:[/?#](?:(?!" + e.src_ZCc + "|" + n + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + e.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + e.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + e.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + e.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + e.src_ZCc + "|[']).)+\\'|\\'(?=" + e.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + e.src_ZCc + "|[.]|$)|" + (t["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + e.src_ZCc + "|$)|;(?!" + e.src_ZCc + "|$)|\\!+(?!" + e.src_ZCc + "|[!]|$)|\\?(?!" + e.src_ZCc + "|[?]|$))+|\\/)?", e.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', e.src_xn = "xn--[a-z0-9\\-]{1,59}", e.src_domain_root = // Allow letters & digits (http://test1)
    "(?:" + e.src_xn + "|" + e.src_pseudo_letter + "{1,63})", e.src_domain = "(?:" + e.src_xn + "|(?:" + e.src_pseudo_letter + ")|(?:" + e.src_pseudo_letter + "(?:-|" + e.src_pseudo_letter + "){0,61}" + e.src_pseudo_letter + "))", e.src_host = "(?:(?:(?:(?:" + e.src_domain + ")\\.)*" + e.src_domain + "))", e.tpl_host_fuzzy = "(?:" + e.src_ip4 + "|(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%)))", e.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%))", e.src_host_strict = e.src_host + e.src_host_terminator, e.tpl_host_fuzzy_strict = e.tpl_host_fuzzy + e.src_host_terminator, e.src_host_port_strict = e.src_host + e.src_port + e.src_host_terminator, e.tpl_host_port_fuzzy_strict = e.tpl_host_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_port_no_ip_fuzzy_strict = e.tpl_host_no_ip_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + e.src_ZPCc + "|>|$))", e.tpl_email_fuzzy = "(^|" + n + '|"|\\(|' + e.src_ZCc + ")(" + e.src_email_name + "@" + e.tpl_host_fuzzy_strict + ")", e.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + e.src_ZPCc + "))((?![$+<=>^`|｜])" + e.tpl_host_port_fuzzy_strict + e.src_path + ")", e.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + e.src_ZPCc + "))((?![$+<=>^`|｜])" + e.tpl_host_port_no_ip_fuzzy_strict + e.src_path + ")", e;
  }), Lt;
}
function Vt(t) {
  var e = Array.prototype.slice.call(arguments, 1);
  return e.forEach(function(n) {
    n && Object.keys(n).forEach(function(o) {
      t[o] = n[o];
    });
  }), t;
}
function gt(t) {
  return Object.prototype.toString.call(t);
}
function PI(t) {
  return gt(t) === "[object String]";
}
function II(t) {
  return gt(t) === "[object Object]";
}
function MI(t) {
  return gt(t) === "[object RegExp]";
}
function Zn(t) {
  return gt(t) === "[object Function]";
}
function BI(t) {
  return t.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
var Ro = {
  fuzzyLink: true,
  fuzzyEmail: true,
  fuzzyIP: false
};
function NI(t) {
  return Object.keys(t || {}).reduce(function(e, n) {
    return e || Ro.hasOwnProperty(n);
  }, false);
}
var $I = {
  "http:": {
    validate: function(t, e, n) {
      var o = t.slice(e);
      return n.re.http || (n.re.http = new RegExp(
        "^\\/\\/" + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path,
        "i"
      )), n.re.http.test(o) ? o.match(n.re.http)[0].length : 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(t, e, n) {
      var o = t.slice(e);
      return n.re.no_http || (n.re.no_http = new RegExp(
        "^" + n.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
        // with code comments
        "(?:localhost|(?:(?:" + n.re.src_domain + ")\\.)+" + n.re.src_domain_root + ")" + n.re.src_port + n.re.src_host_terminator + n.re.src_path,
        "i"
      )), n.re.no_http.test(o) ? e >= 3 && t[e - 3] === ":" || e >= 3 && t[e - 3] === "/" ? 0 : o.match(n.re.no_http)[0].length : 0;
    }
  },
  "mailto:": {
    validate: function(t, e, n) {
      var o = t.slice(e);
      return n.re.mailto || (n.re.mailto = new RegExp(
        "^" + n.re.src_email_name + "@" + n.re.src_host_strict,
        "i"
      )), n.re.mailto.test(o) ? o.match(n.re.mailto)[0].length : 0;
    }
  }
};
var zI = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]";
var VI = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function jI(t) {
  t.__index__ = -1, t.__text_cache__ = "";
}
function UI(t) {
  return function(e, n) {
    var o = e.slice(n);
    return t.test(o) ? o.match(t)[0].length : 0;
  };
}
function Wn() {
  return function(t, e) {
    e.normalize(t);
  };
}
function st(t) {
  var e = t.re = OI()(t.__opts__), n = t.__tlds__.slice();
  t.onCompile(), t.__tlds_replaced__ || n.push(zI), n.push(e.src_xn), e.src_tlds = n.join("|");
  function o(c) {
    return c.replace("%TLDS%", e.src_tlds);
  }
  e.email_fuzzy = RegExp(o(e.tpl_email_fuzzy), "i"), e.link_fuzzy = RegExp(o(e.tpl_link_fuzzy), "i"), e.link_no_ip_fuzzy = RegExp(o(e.tpl_link_no_ip_fuzzy), "i"), e.host_fuzzy_test = RegExp(o(e.tpl_host_fuzzy_test), "i");
  var r = [];
  t.__compiled__ = {};
  function s(c, l) {
    throw new Error('(LinkifyIt) Invalid schema "' + c + '": ' + l);
  }
  Object.keys(t.__schemas__).forEach(function(c) {
    var l = t.__schemas__[c];
    if (l !== null) {
      var a = { validate: null, link: null };
      if (t.__compiled__[c] = a, II(l)) {
        MI(l.validate) ? a.validate = UI(l.validate) : Zn(l.validate) ? a.validate = l.validate : s(c, l), Zn(l.normalize) ? a.normalize = l.normalize : l.normalize ? s(c, l) : a.normalize = Wn();
        return;
      }
      if (PI(l)) {
        r.push(c);
        return;
      }
      s(c, l);
    }
  }), r.forEach(function(c) {
    t.__compiled__[t.__schemas__[c]] && (t.__compiled__[c].validate = t.__compiled__[t.__schemas__[c]].validate, t.__compiled__[c].normalize = t.__compiled__[t.__schemas__[c]].normalize);
  }), t.__compiled__[""] = { validate: null, normalize: Wn() };
  var i = Object.keys(t.__compiled__).filter(function(c) {
    return c.length > 0 && t.__compiled__[c];
  }).map(BI).join("|");
  t.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + e.src_ZPCc + "))(" + i + ")", "i"), t.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + e.src_ZPCc + "))(" + i + ")", "ig"), t.re.schema_at_start = RegExp("^" + t.re.schema_search.source, "i"), t.re.pretest = RegExp(
    "(" + t.re.schema_test.source + ")|(" + t.re.host_fuzzy_test.source + ")|@",
    "i"
  ), jI(t);
}
function HI(t, e) {
  var n = t.__index__, o = t.__last_index__, r = t.__text_cache__.slice(n, o);
  this.schema = t.__schema__.toLowerCase(), this.index = n + e, this.lastIndex = o + e, this.raw = r, this.text = r, this.url = r;
}
function jt(t, e) {
  var n = new HI(t, e);
  return t.__compiled__[n.schema].normalize(n, t), n;
}
function Y(t, e) {
  if (!(this instanceof Y))
    return new Y(t, e);
  e || NI(t) && (e = t, t = {}), this.__opts__ = Vt({}, Ro, e), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = Vt({}, $I, t), this.__compiled__ = {}, this.__tlds__ = VI, this.__tlds_replaced__ = false, this.re = {}, st(this);
}
Y.prototype.add = function(e, n) {
  return this.__schemas__[e] = n, st(this), this;
};
Y.prototype.set = function(e) {
  return this.__opts__ = Vt(this.__opts__, e), this;
};
Y.prototype.test = function(e) {
  if (this.__text_cache__ = e, this.__index__ = -1, !e.length)
    return false;
  var n, o, r, s, i, c, l, a, u;
  if (this.re.schema_test.test(e)) {
    for (l = this.re.schema_search, l.lastIndex = 0; (n = l.exec(e)) !== null; )
      if (s = this.testSchemaAt(e, n[2], l.lastIndex), s) {
        this.__schema__ = n[2], this.__index__ = n.index + n[1].length, this.__last_index__ = n.index + n[0].length + s;
        break;
      }
  }
  return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (a = e.search(this.re.host_fuzzy_test), a >= 0 && (this.__index__ < 0 || a < this.__index__) && (o = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (i = o.index + o[1].length, (this.__index__ < 0 || i < this.__index__) && (this.__schema__ = "", this.__index__ = i, this.__last_index__ = o.index + o[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (u = e.indexOf("@"), u >= 0 && (r = e.match(this.re.email_fuzzy)) !== null && (i = r.index + r[1].length, c = r.index + r[0].length, (this.__index__ < 0 || i < this.__index__ || i === this.__index__ && c > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = i, this.__last_index__ = c))), this.__index__ >= 0;
};
Y.prototype.pretest = function(e) {
  return this.re.pretest.test(e);
};
Y.prototype.testSchemaAt = function(e, n, o) {
  return this.__compiled__[n.toLowerCase()] ? this.__compiled__[n.toLowerCase()].validate(e, o, this) : 0;
};
Y.prototype.match = function(e) {
  var n = 0, o = [];
  this.__index__ >= 0 && this.__text_cache__ === e && (o.push(jt(this, n)), n = this.__last_index__);
  for (var r = n ? e.slice(n) : e; this.test(r); )
    o.push(jt(this, n)), r = r.slice(this.__last_index__), n += this.__last_index__;
  return o.length ? o : null;
};
Y.prototype.matchAtStart = function(e) {
  if (this.__text_cache__ = e, this.__index__ = -1, !e.length)
    return null;
  var n = this.re.schema_at_start.exec(e);
  if (!n)
    return null;
  var o = this.testSchemaAt(e, n[2], n[0].length);
  return o ? (this.__schema__ = n[2], this.__index__ = n.index + n[1].length, this.__last_index__ = n.index + n[0].length + o, jt(this, 0)) : null;
};
Y.prototype.tlds = function(e, n) {
  return e = Array.isArray(e) ? e : [e], n ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter(function(o, r, s) {
    return o !== s[r - 1];
  }).reverse(), st(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = true, st(this), this);
};
Y.prototype.normalize = function(e) {
  e.schema || (e.url = "http://" + e.url), e.schema === "mailto:" && !/^mailto:/i.test(e.url) && (e.url = "mailto:" + e.url);
};
Y.prototype.onCompile = function() {
};
var GI = Y;
var Le = 2147483647;
var ae = 36;
var en = 1;
var Ue = 26;
var ZI = 38;
var WI = 700;
var Oo = 72;
var Po = 128;
var Io = "-";
var JI = /^xn--/;
var KI = /[^\0-\x7F]/;
var YI = /[\x2E\u3002\uFF0E\uFF61]/g;
var QI = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
};
var Rt = ae - en;
var ue = Math.floor;
var Ot = String.fromCharCode;
function me(t) {
  throw new RangeError(QI[t]);
}
function XI(t, e) {
  const n = [];
  let o = t.length;
  for (; o--; )
    n[o] = e(t[o]);
  return n;
}
function Mo(t, e) {
  const n = t.split("@");
  let o = "";
  n.length > 1 && (o = n[0] + "@", t = n[1]), t = t.replace(YI, ".");
  const r = t.split("."), s = XI(r, e).join(".");
  return o + s;
}
function tn(t) {
  const e = [];
  let n = 0;
  const o = t.length;
  for (; n < o; ) {
    const r = t.charCodeAt(n++);
    if (r >= 55296 && r <= 56319 && n < o) {
      const s = t.charCodeAt(n++);
      (s & 64512) == 56320 ? e.push(((r & 1023) << 10) + (s & 1023) + 65536) : (e.push(r), n--);
    } else
      e.push(r);
  }
  return e;
}
var Bo = (t) => String.fromCodePoint(...t);
var eM = function(t) {
  return t >= 48 && t < 58 ? 26 + (t - 48) : t >= 65 && t < 91 ? t - 65 : t >= 97 && t < 123 ? t - 97 : ae;
};
var Jn = function(t, e) {
  return t + 22 + 75 * (t < 26) - ((e != 0) << 5);
};
var No = function(t, e, n) {
  let o = 0;
  for (t = n ? ue(t / WI) : t >> 1, t += ue(t / e); t > Rt * Ue >> 1; o += ae)
    t = ue(t / Rt);
  return ue(o + (Rt + 1) * t / (t + ZI));
};
var nn = function(t) {
  const e = [], n = t.length;
  let o = 0, r = Po, s = Oo, i = t.lastIndexOf(Io);
  i < 0 && (i = 0);
  for (let c = 0; c < i; ++c)
    t.charCodeAt(c) >= 128 && me("not-basic"), e.push(t.charCodeAt(c));
  for (let c = i > 0 ? i + 1 : 0; c < n; ) {
    const l = o;
    for (let u = 1, p = ae; ; p += ae) {
      c >= n && me("invalid-input");
      const f = eM(t.charCodeAt(c++));
      f >= ae && me("invalid-input"), f > ue((Le - o) / u) && me("overflow"), o += f * u;
      const d = p <= s ? en : p >= s + Ue ? Ue : p - s;
      if (f < d)
        break;
      const v = ae - d;
      u > ue(Le / v) && me("overflow"), u *= v;
    }
    const a = e.length + 1;
    s = No(o - l, a, l == 0), ue(o / a) > Le - r && me("overflow"), r += ue(o / a), o %= a, e.splice(o++, 0, r);
  }
  return String.fromCodePoint(...e);
};
var on = function(t) {
  const e = [];
  t = tn(t);
  const n = t.length;
  let o = Po, r = 0, s = Oo;
  for (const l of t)
    l < 128 && e.push(Ot(l));
  const i = e.length;
  let c = i;
  for (i && e.push(Io); c < n; ) {
    let l = Le;
    for (const u of t)
      u >= o && u < l && (l = u);
    const a = c + 1;
    l - o > ue((Le - r) / a) && me("overflow"), r += (l - o) * a, o = l;
    for (const u of t)
      if (u < o && ++r > Le && me("overflow"), u === o) {
        let p = r;
        for (let f = ae; ; f += ae) {
          const d = f <= s ? en : f >= s + Ue ? Ue : f - s;
          if (p < d)
            break;
          const v = p - d, g = ae - d;
          e.push(
            Ot(Jn(d + v % g, 0))
          ), p = ue(v / g);
        }
        e.push(Ot(Jn(p, 0))), s = No(r, a, c === i), r = 0, ++c;
      }
    ++r, ++o;
  }
  return e.join("");
};
var $o = function(t) {
  return Mo(t, function(e) {
    return JI.test(e) ? nn(e.slice(4).toLowerCase()) : e;
  });
};
var zo = function(t) {
  return Mo(t, function(e) {
    return KI.test(e) ? "xn--" + on(e) : e;
  });
};
var tM = {
  /**
   * A string representing the current Punycode.js version number.
   * @memberOf punycode
   * @type String
   */
  version: "2.1.0",
  /**
   * An object of methods to convert from JavaScript's internal character
   * representation (UCS-2) to Unicode code points, and back.
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode
   * @type Object
   */
  ucs2: {
    decode: tn,
    encode: Bo
  },
  decode: nn,
  encode: on,
  toASCII: zo,
  toUnicode: $o
};
var nM = Object.freeze(Object.defineProperty({
  __proto__: null,
  decode: nn,
  default: tM,
  encode: on,
  toASCII: zo,
  toUnicode: $o,
  ucs2decode: tn,
  ucs2encode: Bo
}, Symbol.toStringTag, { value: "Module" }));
var oM = fs(nM);
var rM = {
  options: {
    html: false,
    // Enable HTML tags in source
    xhtmlOut: false,
    // Use '/' to close single tags (<br />)
    breaks: false,
    // Convert '\n' in paragraphs into <br>
    langPrefix: "language-",
    // CSS language prefix for fenced blocks
    linkify: false,
    // autoconvert URL-like texts to links
    // Enable some language-neutral replacements + quotes beautification
    typographer: false,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    maxNesting: 100
    // Internal protection, recursion limit
  },
  components: {
    core: {},
    block: {},
    inline: {}
  }
};
var sM = {
  options: {
    html: false,
    // Enable HTML tags in source
    xhtmlOut: false,
    // Use '/' to close single tags (<br />)
    breaks: false,
    // Convert '\n' in paragraphs into <br>
    langPrefix: "language-",
    // CSS language prefix for fenced blocks
    linkify: false,
    // autoconvert URL-like texts to links
    // Enable some language-neutral replacements + quotes beautification
    typographer: false,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    maxNesting: 20
    // Internal protection, recursion limit
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "text"
      ],
      rules2: [
        "balance_pairs",
        "fragments_join"
      ]
    }
  }
};
var cM = {
  options: {
    html: true,
    // Enable HTML tags in source
    xhtmlOut: true,
    // Use '/' to close single tags (<br />)
    breaks: false,
    // Convert '\n' in paragraphs into <br>
    langPrefix: "language-",
    // CSS language prefix for fenced blocks
    linkify: false,
    // autoconvert URL-like texts to links
    // Enable some language-neutral replacements + quotes beautification
    typographer: false,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    maxNesting: 20
    // Internal protection, recursion limit
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "blockquote",
        "code",
        "fence",
        "heading",
        "hr",
        "html_block",
        "lheading",
        "list",
        "reference",
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "autolink",
        "backticks",
        "emphasis",
        "entity",
        "escape",
        "html_inline",
        "image",
        "link",
        "newline",
        "text"
      ],
      rules2: [
        "balance_pairs",
        "emphasis",
        "fragments_join"
      ]
    }
  }
};
var Ve = B;
var iM = pt;
var lM = tP;
var aM = AP;
var uM = oI;
var pM = RI;
var fM = GI;
var De = Pe;
var Vo = oM;
var dM = {
  default: rM,
  zero: sM,
  commonmark: cM
};
var hM = /^(vbscript|javascript|file|data):/;
var mM = /^data:image\/(gif|png|jpeg|webp);/;
function vM(t) {
  var e = t.trim().toLowerCase();
  return hM.test(e) ? !!mM.test(e) : true;
}
var jo = ["http:", "https:", "mailto:"];
function gM(t) {
  var e = De.parse(t, true);
  if (e.hostname && (!e.protocol || jo.indexOf(e.protocol) >= 0))
    try {
      e.hostname = Vo.toASCII(e.hostname);
    } catch {
    }
  return De.encode(De.format(e));
}
function bM(t) {
  var e = De.parse(t, true);
  if (e.hostname && (!e.protocol || jo.indexOf(e.protocol) >= 0))
    try {
      e.hostname = Vo.toUnicode(e.hostname);
    } catch {
    }
  return De.decode(De.format(e), De.decode.defaultChars + "%");
}
function ee(t, e) {
  if (!(this instanceof ee))
    return new ee(t, e);
  e || Ve.isString(t) || (e = t || {}, t = "default"), this.inline = new pM(), this.block = new uM(), this.core = new aM(), this.renderer = new lM(), this.linkify = new fM(), this.validateLink = vM, this.normalizeLink = gM, this.normalizeLinkText = bM, this.utils = Ve, this.helpers = Ve.assign({}, iM), this.options = {}, this.configure(t), e && this.set(e);
}
ee.prototype.set = function(t) {
  return Ve.assign(this.options, t), this;
};
ee.prototype.configure = function(t) {
  var e = this, n;
  if (Ve.isString(t) && (n = t, t = dM[n], !t))
    throw new Error('Wrong `markdown-it` preset "' + n + '", check name');
  if (!t)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return t.options && e.set(t.options), t.components && Object.keys(t.components).forEach(function(o) {
    t.components[o].rules && e[o].ruler.enableOnly(t.components[o].rules), t.components[o].rules2 && e[o].ruler2.enableOnly(t.components[o].rules2);
  }), this;
};
ee.prototype.enable = function(t, e) {
  var n = [];
  Array.isArray(t) || (t = [t]), ["core", "block", "inline"].forEach(function(r) {
    n = n.concat(this[r].ruler.enable(t, true));
  }, this), n = n.concat(this.inline.ruler2.enable(t, true));
  var o = t.filter(function(r) {
    return n.indexOf(r) < 0;
  });
  if (o.length && !e)
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + o);
  return this;
};
ee.prototype.disable = function(t, e) {
  var n = [];
  Array.isArray(t) || (t = [t]), ["core", "block", "inline"].forEach(function(r) {
    n = n.concat(this[r].ruler.disable(t, true));
  }, this), n = n.concat(this.inline.ruler2.disable(t, true));
  var o = t.filter(function(r) {
    return n.indexOf(r) < 0;
  });
  if (o.length && !e)
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + o);
  return this;
};
ee.prototype.use = function(t) {
  var e = [this].concat(Array.prototype.slice.call(arguments, 1));
  return t.apply(t, e), this;
};
ee.prototype.parse = function(t, e) {
  if (typeof t != "string")
    throw new Error("Input data should be a String");
  var n = new this.core.State(t, this, e);
  return this.core.process(n), n.tokens;
};
ee.prototype.render = function(t, e) {
  return e = e || {}, this.renderer.render(this.parse(t, e), this.options, e);
};
ee.prototype.parseInline = function(t, e) {
  var n = new this.core.State(t, this, e);
  return n.inlineMode = true, this.core.process(n), n.tokens;
};
ee.prototype.renderInline = function(t, e) {
  return e = e || {}, this.renderer.render(this.parseInline(t, e), this.options, e);
};
var CM = ee;
var _M = CM;
var kM = ps(_M);
var ce = (t) => (pushScopeId("data-v-c65fa87c"), t = t(), popScopeId(), t);
var xM = ce(() => createBaseVNode("svg", {
  class: "icon",
  viewBox: "0 0 12 14",
  fill: "currentColor"
}, [
  createBaseVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M6.61655 13.3474C6.69072 13.3474 6.75047 13.3232 6.7958 13.2749C6.84525 13.2306 6.87616 13.1721 6.88852 13.0996C6.97094 12.4628 7.0616 11.9269 7.1605 11.4916C7.26352 11.0564 7.39951 10.6997 7.56847 10.4216C7.73742 10.1435 7.96202 9.92194 8.24223 9.75671C8.52245 9.59147 8.88099 9.46454 9.31782 9.37581C9.7587 9.28313 10.2986 9.20257 10.9373 9.13407C11.0156 9.12598 11.0774 9.09776 11.1227 9.04939C11.1722 9.00103 11.1969 8.94061 11.1969 8.86806C11.1969 8.79552 11.1722 8.7351 11.1227 8.68674C11.0774 8.63837 11.0156 8.61015 10.9373 8.60206C10.2986 8.53356 9.7587 8.45498 9.31782 8.36634C8.88099 8.27366 8.52245 8.1447 8.24223 7.97946C7.96202 7.81424 7.73742 7.59259 7.56847 7.31452C7.39951 7.03646 7.26352 6.6798 7.1605 6.24456C7.0616 5.80932 6.97094 5.27132 6.88852 4.63056C6.87616 4.56205 6.84525 4.50563 6.7958 4.4613C6.75047 4.41293 6.69072 4.38876 6.61655 4.38876C6.54237 4.38876 6.48056 4.41293 6.4311 4.4613C6.38578 4.50563 6.35693 4.56205 6.34456 4.63056C6.26627 5.27132 6.17561 5.80932 6.07259 6.24456C5.97369 6.6798 5.8377 7.03646 5.66462 7.31452C5.49566 7.59259 5.27108 7.81424 4.99086 7.97946C4.71064 8.1447 4.35212 8.27366 3.91531 8.36634C3.4785 8.45498 2.93866 8.53356 2.2958 8.60206C2.21751 8.61015 2.15363 8.63837 2.10418 8.68674C2.05473 8.7351 2.03001 8.79552 2.03001 8.86806C2.03001 8.94061 2.05473 9.00103 2.10418 9.04939C2.15363 9.09776 2.21751 9.12598 2.2958 9.13407C2.93454 9.21462 3.47231 9.30533 3.90913 9.4061C4.34594 9.50283 4.70239 9.63175 4.97849 9.79294C5.25871 9.95413 5.48331 10.1718 5.65226 10.4458C5.82122 10.7158 5.95721 11.0664 6.06023 11.4976C6.16325 11.9288 6.25802 12.4628 6.34456 13.0996C6.35693 13.1721 6.38578 13.2306 6.4311 13.2749C6.48056 13.3232 6.54237 13.3474 6.61655 13.3474ZM2.65431 7.00622C2.70377 7.00622 2.74498 6.9901 2.77795 6.95787C2.81091 6.92563 2.82945 6.88734 2.83358 6.84301C2.88714 6.46016 2.94072 6.16396 2.99429 5.9544C3.04786 5.74081 3.13234 5.58163 3.24773 5.47685C3.36311 5.36804 3.53412 5.28341 3.76078 5.22296C3.98742 5.16251 4.30267 5.094 4.70652 5.01744C4.81366 5.00131 4.86723 4.94287 4.86723 4.84212C4.86723 4.79377 4.85074 4.75548 4.81778 4.72727C4.78893 4.69503 4.75185 4.67489 4.70652 4.66682C4.30267 4.6104 3.98536 4.556 3.7546 4.50361C3.52794 4.44719 3.35693 4.36458 3.24155 4.25576C3.13028 4.14293 3.04786 3.9777 2.99429 3.76008C2.94072 3.53843 2.88714 3.23417 2.83358 2.84729C2.82122 2.73848 2.76146 2.68408 2.65431 2.68408C2.54717 2.68408 2.48536 2.7405 2.46888 2.85334C2.42355 3.23215 2.3741 3.52836 2.32053 3.74195C2.26696 3.95553 2.18248 4.11673 2.06709 4.22554C1.95171 4.33032 1.77863 4.41293 1.54786 4.47339C1.32121 4.52981 1.00597 4.59428 0.602121 4.66682C0.494978 4.68698 0.441406 4.74541 0.441406 4.84212C0.441406 4.94287 0.503219 5.00131 0.626846 5.01744C1.02245 5.08594 1.33357 5.14841 1.56023 5.20483C1.791 5.26125 1.96201 5.34386 2.07328 5.45267C2.18454 5.56148 2.26696 5.72469 2.32053 5.94231C2.3741 6.1559 2.42355 6.45412 2.46888 6.83697C2.48536 6.9498 2.54717 7.00622 2.65431 7.00622ZM5.49773 3.08909C5.56366 3.08909 5.60487 3.05281 5.62135 2.98028C5.67493 2.67803 5.72643 2.45638 5.77589 2.31533C5.82534 2.17025 5.92217 2.06749 6.0664 2.00704C6.21064 1.94659 6.45377 1.88815 6.7958 1.83173C6.86998 1.81561 6.90707 1.77531 6.90707 1.71084C6.90707 1.6383 6.86998 1.598 6.7958 1.58993C6.45377 1.52949 6.21064 1.47105 6.0664 1.41463C5.92217 1.35418 5.82534 1.25343 5.77589 1.11238C5.72643 0.967306 5.67493 0.741626 5.62135 0.435348C5.60487 0.362808 5.56366 0.326538 5.49773 0.326538C5.42355 0.326538 5.38234 0.362808 5.3741 0.435348C5.31641 0.741626 5.26283 0.967306 5.21338 1.11238C5.16806 1.25343 5.07121 1.35418 4.92286 1.41463C4.77863 1.47105 4.5355 1.52949 4.19347 1.58993C4.11929 1.598 4.0822 1.6383 4.0822 1.71084C4.0822 1.77531 4.11929 1.81561 4.19347 1.83173C4.5355 1.88815 4.77863 1.94659 4.92286 2.00704C5.07121 2.06749 5.16806 2.17025 5.21338 2.31533C5.26283 2.45638 5.31641 2.67803 5.3741 2.98028C5.38234 3.05281 5.42355 3.08909 5.49773 3.08909Z"
  })
], -1));
var yM = ce(() => createBaseVNode("span", { class: "button-placeholder" }, "Ask AI", -1));
var wM = [
  xM,
  yM
];
var AM = ce(() => createBaseVNode("div", { class: "transition-child-ref" }, null, -1));
var EM = { class: "dialog-container" };
var DM = { class: "chat-container" };
var SM = ce(() => createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "magnifying-glass-icon",
  "aria-hidden": "true"
}, [
  createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
  })
], -1));
var qM = { key: 0 };
var TM = { class: "combobox-options-container" };
var FM = ce(() => createBaseVNode("svg", {
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "option-icon"
}, [
  createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
  })
], -1));
var LM = { class: "combobox-options-name" };
var RM = {
  key: 1,
  class: "result-not-found"
};
var OM = ce(() => createBaseVNode("p", { class: "result-not-found-text" }, "How can I help you today?", -1));
var PM = [
  OM
];
var IM = { class: "question-anwser-section" };
var MM = {
  key: 0,
  class: "question-role-user"
};
var BM = ce(() => createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "question-role-icon"
}, [
  createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
  })
], -1));
var NM = {
  key: 1,
  class: "result-not-found"
};
var $M = ce(() => createBaseVNode("p", { class: "result-not-found-text" }, "We couldn’t find anything with that term. Please try again.", -1));
var zM = [
  $M
];
var VM = {
  key: 2,
  class: "anwser-content"
};
var jM = ce(() => createBaseVNode("svg", {
  class: "question-role-icon documate-logo",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  createBaseVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M3.79938 23.5375C3.57959 23.516 3.36074 23.4856 3.14338 23.4465C2.98375 23.4179 2.83446 23.3477 2.71056 23.243C2.58666 23.1384 2.49252 23.0029 2.43762 22.8503C2.38272 22.6977 2.36899 22.5334 2.39782 22.3738C2.42665 22.2142 2.49702 22.065 2.60185 21.9412C3.10678 21.346 3.45159 20.6318 3.60369 19.8662C3.632 19.7246 3.57661 19.476 3.29108 19.1978C1.26031 17.2225 0 14.5431 0 11.5769C0 5.38615 5.44985 0.5 12 0.5C18.5502 0.5 24 5.38615 24 11.5769C24 17.7677 18.5502 22.6538 12 22.6538C10.9748 22.6538 9.97785 22.5345 9.02523 22.3105C7.46812 23.289 5.62931 23.7208 3.79938 23.5375ZM12.7957 18.2748C12.7504 18.3232 12.6907 18.3474 12.6165 18.3474C12.5423 18.3474 12.4805 18.3232 12.431 18.2748C12.3857 18.2305 12.3569 18.1721 12.3445 18.0995C12.258 17.4628 12.1632 16.9288 12.0602 16.4976C11.9571 16.0664 11.8212 15.7158 11.6522 15.4457C11.4832 15.1717 11.2587 14.9541 10.9784 14.7929C10.7023 14.6317 10.3459 14.5028 9.90907 14.4061C9.47225 14.3053 8.93448 14.2146 8.29574 14.134C8.21745 14.1259 8.15357 14.0977 8.10412 14.0494C8.05467 14.001 8.02995 13.9406 8.02995 13.868C8.02995 13.7955 8.05467 13.7351 8.10412 13.6867C8.15357 13.6383 8.21745 13.6101 8.29574 13.602C8.9386 13.5335 9.47844 13.4549 9.91525 13.3663C10.3521 13.2736 10.7106 13.1447 10.9908 12.9794C11.271 12.8142 11.4956 12.5925 11.6646 12.3145C11.8376 12.0364 11.9736 11.6798 12.0725 11.2445C12.1756 10.8093 12.2662 10.2713 12.3445 9.63052C12.3569 9.56201 12.3857 9.50559 12.431 9.46126C12.4805 9.4129 12.5423 9.38872 12.6165 9.38872C12.6907 9.38872 12.7504 9.4129 12.7957 9.46126C12.8452 9.50559 12.8761 9.56201 12.8885 9.63052C12.9709 10.2713 13.0615 10.8093 13.1604 11.2445C13.2635 11.6798 13.3994 12.0364 13.5684 12.3145C13.7374 12.5925 13.962 12.8142 14.2422 12.9794C14.5224 13.1447 14.8809 13.2736 15.3178 13.3663C15.7586 13.4549 16.2985 13.5335 16.9372 13.602C17.0155 13.6101 17.0773 13.6383 17.1226 13.6867C17.1721 13.7351 17.1968 13.7955 17.1968 13.868C17.1968 13.9406 17.1721 14.001 17.1226 14.0494C17.0773 14.0977 17.0155 14.1259 16.9372 14.134C16.2985 14.2025 15.7586 14.2831 15.3178 14.3758C14.8809 14.4645 14.5224 14.5914 14.2422 14.7567C13.962 14.9219 13.7374 15.1435 13.5684 15.4216C13.3994 15.6997 13.2635 16.0563 13.1604 16.4915C13.0615 16.9268 12.9709 17.4628 12.8885 18.0995C12.8761 18.1721 12.8452 18.2305 12.7957 18.2748ZM8.77789 11.9578C8.74492 11.9901 8.70371 12.0062 8.65425 12.0062C8.54711 12.0062 8.4853 11.9498 8.46882 11.8369C8.42349 11.4541 8.37404 11.1559 8.32047 10.9423C8.2669 10.7247 8.18448 10.5614 8.07322 10.4526C7.96195 10.3438 7.79094 10.2612 7.56017 10.2048C7.33351 10.1484 7.02239 10.0859 6.62679 10.0174C6.50316 10.0013 6.44135 9.94284 6.44135 9.84209C6.44135 9.74538 6.49492 9.68694 6.60206 9.66679C7.00591 9.59425 7.32115 9.52977 7.5478 9.47335C7.77857 9.4129 7.95164 9.33029 8.06703 9.2255C8.18242 9.1167 8.2669 8.95549 8.32047 8.74191C8.37404 8.52832 8.42349 8.23212 8.46882 7.8533C8.4853 7.74046 8.54711 7.68404 8.65425 7.68404C8.7614 7.68404 8.82116 7.73845 8.83352 7.84725C8.88709 8.23413 8.94066 8.53839 8.99423 8.76004C9.0478 8.97766 9.13022 9.14289 9.24149 9.25573C9.35687 9.36454 9.52788 9.44716 9.75454 9.50358C9.9853 9.55596 10.3026 9.61037 10.7065 9.66679C10.7518 9.67485 10.7889 9.695 10.8177 9.72724C10.8507 9.75545 10.8672 9.79373 10.8672 9.84209C10.8672 9.94284 10.8136 10.0013 10.7065 10.0174C10.3026 10.094 9.98736 10.1625 9.76072 10.2229C9.53406 10.2834 9.36305 10.368 9.24767 10.4768C9.13228 10.5816 9.0478 10.7408 8.99423 10.9544C8.94066 11.1639 8.88709 11.4601 8.83352 11.843C8.82939 11.8873 8.81085 11.9256 8.77789 11.9578ZM11.6213 7.98024C11.6048 8.05278 11.5636 8.08905 11.4977 8.08905C11.4235 8.08905 11.3823 8.05278 11.374 7.98024C11.3163 7.67799 11.2628 7.45635 11.2133 7.3153C11.168 7.17022 11.0712 7.06746 10.9228 7.007C10.7786 6.94655 10.5354 6.88812 10.1934 6.8317C10.1192 6.81558 10.0821 6.77528 10.0821 6.7108C10.0821 6.63826 10.1192 6.59796 10.1934 6.5899C10.5354 6.52945 10.7786 6.47102 10.9228 6.4146C11.0712 6.35415 11.168 6.2534 11.2133 6.11235C11.2628 5.96727 11.3163 5.74159 11.374 5.43531C11.3823 5.36277 11.4235 5.3265 11.4977 5.3265C11.5636 5.3265 11.6048 5.36277 11.6213 5.43531C11.6749 5.74159 11.7264 5.96727 11.7758 6.11235C11.8253 6.2534 11.9221 6.35415 12.0663 6.4146C12.2106 6.47102 12.4537 6.52945 12.7957 6.5899C12.8699 6.59796 12.907 6.63826 12.907 6.7108C12.907 6.77528 12.8699 6.81558 12.7957 6.8317C12.4537 6.88812 12.2106 6.94655 12.0663 7.007C11.9221 7.06746 11.8253 7.17022 11.7758 7.3153C11.7264 7.45635 11.6749 7.67799 11.6213 7.98024Z",
    fill: "currentColor"
  })
], -1));
var UM = ["innerHTML"];
var HM = { class: "loading" };
var GM = ce(() => createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "loading-spin"
}, [
  createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
  })
], -1));
var ZM = [
  GM
];
var WM = ce(() => createBaseVNode("div", { class: "footer" }, [
  createBaseVNode("div", { class: "kbd-wrap" }, [
    createBaseVNode("span", { class: "kbd-text" }, "Type"),
    createBaseVNode("kbd", { class: "kbd" }, "⌘"),
    createBaseVNode("span", { class: "kbd-text" }, "+"),
    createBaseVNode("kbd", { class: "kbd" }, "/"),
    createBaseVNode("span", { class: "kbd-text" }, "to open"),
    createBaseVNode("kbd", {
      class: normalizeClass(["kbd", "esc"])
    }, "esc"),
    createBaseVNode("span", { class: "kbd-text" }, "to close")
  ]),
  createBaseVNode("a", {
    href: "https://documate.site/",
    class: "powered-by"
  }, [
    createBaseVNode("span", null, "Powered by"),
    createBaseVNode("svg", {
      width: "100",
      height: "18",
      viewBox: "0 0 240 46",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      createBaseVNode("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M7.72224 46.8237C7.2755 46.7799 6.8307 46.7181 6.38892 46.6386C6.06446 46.5805 5.76104 46.4379 5.50921 46.2252C5.25739 46.0125 5.06605 45.7372 4.95446 45.427C4.84287 45.1168 4.81497 44.7827 4.87356 44.4584C4.93216 44.134 5.07519 43.8308 5.28824 43.5792C6.31452 42.3694 7.01535 40.9178 7.32449 39.3617C7.38203 39.074 7.26946 38.5687 6.6891 38.0033C2.56157 33.9883 0 28.5425 0 22.5138C0 9.93109 11.0768 0 24.39 0C37.7031 0 48.7799 9.93109 48.7799 22.5138C48.7799 35.0965 37.7031 45.0276 24.39 45.0276C22.3062 45.0276 20.2799 44.785 18.3438 44.3297C15.1789 46.3186 11.4415 47.1962 7.72224 46.8237ZM26.0073 36.1273C25.9152 36.2256 25.7937 36.2748 25.643 36.2748C25.4922 36.2748 25.3666 36.2256 25.2661 36.1273C25.1739 36.0372 25.1153 35.9185 25.0902 35.771C24.9143 34.4768 24.7216 33.3915 24.5123 32.515C24.3029 31.6387 24.0265 30.9261 23.6831 30.3772C23.3397 29.8203 22.8832 29.3779 22.3136 29.0503C21.7525 28.7227 21.028 28.4606 20.1401 28.264C19.2523 28.0592 18.1593 27.8749 16.8611 27.7111C16.7019 27.6947 16.5721 27.6373 16.4716 27.539C16.3711 27.4407 16.3208 27.3179 16.3208 27.1705C16.3208 27.023 16.3711 26.9002 16.4716 26.8019C16.5721 26.7036 16.7019 26.6463 16.8611 26.6298C18.1677 26.4906 19.2649 26.3309 20.1527 26.1507C21.0405 25.9623 21.7692 25.7002 22.3388 25.3644C22.9083 25.0286 23.3648 24.5781 23.7082 24.0129C24.06 23.4477 24.3364 22.7228 24.5374 21.8382C24.7468 20.9536 24.931 19.8601 25.0902 18.5578C25.1153 18.4185 25.1739 18.3038 25.2661 18.2137C25.3666 18.1154 25.4922 18.0663 25.643 18.0663C25.7937 18.0663 25.9152 18.1154 26.0073 18.2137C26.1078 18.3038 26.1706 18.4185 26.1958 18.5578C26.3633 19.8601 26.5475 20.9536 26.7486 21.8382C26.9579 22.7228 27.2343 23.4477 27.5777 24.0129C27.9211 24.5781 28.3776 25.0286 28.9472 25.3644C29.5167 25.7002 30.2454 25.9623 31.1333 26.1507C32.0294 26.3309 33.1267 26.4906 34.4249 26.6298C34.584 26.6463 34.7096 26.7036 34.8017 26.8019C34.9022 26.9002 34.9525 27.023 34.9525 27.1705C34.9525 27.3179 34.9022 27.4407 34.8017 27.539C34.7096 27.6373 34.584 27.6947 34.4249 27.7111C33.1267 27.8504 32.0294 28.0141 31.1333 28.2025C30.2454 28.3828 29.5167 28.6408 28.9472 28.9766C28.3776 29.3125 27.9211 29.7629 27.5777 30.328C27.2343 30.8934 26.9579 31.6182 26.7486 32.5028C26.5475 33.3875 26.3633 34.4768 26.1958 35.771C26.1706 35.9185 26.1078 36.0372 26.0073 36.1273ZM17.841 23.288C17.774 23.3535 17.6903 23.3863 17.5897 23.3863C17.372 23.3863 17.2464 23.2716 17.2129 23.0423C17.1207 22.2641 17.0202 21.658 16.9113 21.2239C16.8024 20.7816 16.6349 20.4499 16.4088 20.2287C16.1826 20.0075 15.8351 19.8396 15.366 19.725C14.9053 19.6103 14.273 19.4833 13.4689 19.3441C13.2177 19.3113 13.092 19.1925 13.092 18.9878C13.092 18.7912 13.2009 18.6724 13.4187 18.6315C14.2395 18.484 14.8802 18.353 15.3409 18.2383C15.8099 18.1154 16.1617 17.9475 16.3962 17.7346C16.6307 17.5134 16.8024 17.1858 16.9113 16.7517C17.0202 16.3175 17.1207 15.7155 17.2129 14.9456C17.2464 14.7162 17.372 14.6015 17.5897 14.6015C17.8075 14.6015 17.929 14.7121 17.9541 14.9333C18.063 15.7196 18.1719 16.338 18.2808 16.7885C18.3896 17.2308 18.5571 17.5667 18.7833 17.796C19.0178 18.0172 19.3654 18.1851 19.8261 18.2997C20.2951 18.4062 20.94 18.5168 21.7608 18.6315C21.853 18.6479 21.9284 18.6888 21.987 18.7543C22.054 18.8117 22.0875 18.8895 22.0875 18.9878C22.0875 19.1925 21.9786 19.3113 21.7608 19.3441C20.94 19.4997 20.2993 19.639 19.8386 19.7618C19.378 19.8847 19.0304 20.0567 18.7959 20.2778C18.5613 20.4908 18.3896 20.8143 18.2808 21.2485C18.1719 21.6744 18.063 22.2764 17.9541 23.0546C17.9457 23.1447 17.908 23.2225 17.841 23.288ZM23.6202 15.2036C23.5867 15.351 23.503 15.4247 23.369 15.4247C23.2182 15.4247 23.1345 15.351 23.1177 15.2036C23.0004 14.5892 22.8915 14.1388 22.791 13.8521C22.6989 13.5572 22.5021 13.3483 22.2006 13.2255C21.9074 13.1026 21.4133 12.9838 20.7181 12.8692C20.5673 12.8364 20.4919 12.7545 20.4919 12.6234C20.4919 12.476 20.5673 12.3941 20.7181 12.3777C21.4133 12.2548 21.9074 12.1361 22.2006 12.0214C22.5021 11.8985 22.6989 11.6938 22.791 11.4071C22.8915 11.1122 23.0004 10.6535 23.1177 10.031C23.1345 9.88357 23.2182 9.80985 23.369 9.80985C23.503 9.80985 23.5867 9.88357 23.6202 10.031C23.7291 10.6535 23.8338 11.1122 23.9343 11.4071C24.0348 11.6938 24.2317 11.8985 24.5248 12.0214C24.818 12.1361 25.3121 12.2548 26.0073 12.3777C26.1581 12.3941 26.2335 12.476 26.2335 12.6234C26.2335 12.7545 26.1581 12.8364 26.0073 12.8692C25.3121 12.9838 24.818 13.1026 24.5248 13.2255C24.2317 13.3483 24.0348 13.5572 23.9343 13.8521C23.8338 14.1388 23.7291 14.5892 23.6202 15.2036Z",
        fill: "var(--dm-text-color)"
      }),
      createBaseVNode("path", {
        d: "M66.5693 37.5231V12.3076H76.4394C78.2405 12.3076 79.8615 12.6078 81.3024 13.2082C82.7673 13.8085 84.016 14.6731 85.0487 15.8018C86.0813 16.9305 86.8738 18.2633 87.4261 19.8002C87.9785 21.3372 88.2546 23.0422 88.2546 24.9154C88.2546 26.7885 87.9785 28.5056 87.4261 30.0665C86.8738 31.6035 86.0813 32.9363 85.0487 34.065C84.0401 35.1696 82.8033 36.0222 81.3384 36.6225C79.8735 37.2229 78.2405 37.5231 76.4394 37.5231H66.5693ZM70.4597 34.173L70.3517 33.7768H76.2593C77.5321 33.7768 78.6608 33.5727 79.6454 33.1644C80.654 32.7562 81.4945 32.1798 82.1669 31.4354C82.8633 30.6669 83.3917 29.7303 83.7519 28.6256C84.1121 27.521 84.2922 26.2842 84.2922 24.9154C84.2922 23.5465 84.1121 22.3218 83.7519 21.2411C83.3917 20.1364 82.8633 19.1998 82.1669 18.4314C81.4705 17.6629 80.63 17.0745 79.6454 16.6663C78.6608 16.258 77.5321 16.0539 76.2593 16.0539H70.2436L70.4597 15.7297V34.173Z",
        fill: "var(--dm-text-color)"
      }),
      createBaseVNode("path", {
        d: "M100.72 37.8833C98.8708 37.8833 97.2138 37.4631 95.7489 36.6225C94.308 35.758 93.1673 34.5933 92.3268 33.1284C91.4863 31.6395 91.0661 29.9464 91.0661 28.0493C91.0661 26.1521 91.4863 24.4711 92.3268 23.0062C93.1673 21.5173 94.308 20.3526 95.7489 19.512C97.2138 18.6475 98.8708 18.2152 100.72 18.2152C102.545 18.2152 104.178 18.6475 105.619 19.512C107.084 20.3526 108.237 21.5173 109.077 23.0062C109.918 24.4711 110.338 26.1521 110.338 28.0493C110.338 29.9464 109.918 31.6395 109.077 33.1284C108.237 34.5933 107.084 35.758 105.619 36.6225C104.178 37.4631 102.545 37.8833 100.72 37.8833ZM100.72 34.4972C101.849 34.4972 102.857 34.2211 103.746 33.6687C104.634 33.0924 105.331 32.3239 105.835 31.3633C106.339 30.3787 106.58 29.274 106.556 28.0493C106.58 26.8005 106.339 25.6958 105.835 24.7352C105.331 23.7506 104.634 22.9822 103.746 22.4298C102.857 21.8775 101.849 21.6013 100.72 21.6013C99.5913 21.6013 98.5707 21.8895 97.6581 22.4659C96.7696 23.0182 96.0731 23.7867 95.5688 24.7713C95.0645 25.7319 94.8244 26.8245 94.8484 28.0493C94.8244 29.274 95.0645 30.3787 95.5688 31.3633C96.0731 32.3239 96.7696 33.0924 97.6581 33.6687C98.5707 34.2211 99.5913 34.4972 100.72 34.4972Z",
        fill: "var(--dm-text-color)"
      }),
      createBaseVNode("path", {
        d: "M122.054 37.8833C120.3 37.8833 118.727 37.451 117.335 36.5865C115.966 35.722 114.873 34.5453 114.057 33.0563C113.264 31.5674 112.868 29.8984 112.868 28.0493C112.868 26.2001 113.264 24.5311 114.057 23.0422C114.873 21.5533 115.966 20.3766 117.335 19.512C118.727 18.6475 120.3 18.2152 122.054 18.2152C123.735 18.2152 125.259 18.5635 126.628 19.2599C128.021 19.9323 129.078 20.8569 129.798 22.0336L127.745 24.5551C127.361 24.0028 126.868 23.4985 126.268 23.0422C125.668 22.5859 125.031 22.2257 124.359 21.9615C123.687 21.6974 123.038 21.5653 122.414 21.5653C121.261 21.5653 120.228 21.8535 119.316 22.4298C118.427 22.9822 117.719 23.7506 117.191 24.7352C116.662 25.7198 116.398 26.8245 116.398 28.0493C116.398 29.274 116.674 30.3787 117.227 31.3633C117.779 32.3239 118.511 33.0924 119.424 33.6687C120.336 34.2451 121.345 34.5333 122.45 34.5333C123.098 34.5333 123.723 34.4252 124.323 34.2091C124.947 33.9929 125.548 33.6687 126.124 33.2365C126.7 32.8042 127.241 32.2759 127.745 31.6515L129.798 34.173C129.03 35.2537 127.925 36.1422 126.484 36.8387C125.067 37.5351 123.59 37.8833 122.054 37.8833Z",
        fill: "var(--dm-text-color)"
      }),
      createBaseVNode("path", {
        d: "M139.566 37.8833C138.221 37.8833 137.044 37.5711 136.036 36.9467C135.051 36.3224 134.283 35.4458 133.73 34.3171C133.202 33.1884 132.938 31.8436 132.938 30.2826V18.6115H136.648V29.274C136.648 30.3787 136.816 31.3393 137.152 32.1558C137.513 32.9483 138.017 33.5607 138.665 33.9929C139.338 34.4252 140.142 34.6413 141.079 34.6413C141.775 34.6413 142.412 34.5333 142.988 34.3171C143.564 34.077 144.057 33.7528 144.465 33.3445C144.897 32.9363 145.233 32.444 145.473 31.8676C145.714 31.2913 145.834 30.6669 145.834 29.9945V18.6115H149.544V37.5231H145.834V33.5607L146.482 33.1284C146.194 34.0169 145.702 34.8214 145.005 35.5419C144.333 36.2623 143.528 36.8387 142.592 37.2709C141.655 37.6792 140.647 37.8833 139.566 37.8833Z",
        fill: "var(--dm-text-color)"
      }),
      createBaseVNode("path", {
        d: "M154.316 37.5231V18.6115H158.062V22.646L157.378 23.0782C157.57 22.4538 157.87 21.8535 158.278 21.2771C158.71 20.7008 159.227 20.1965 159.827 19.7642C160.452 19.3079 161.112 18.9477 161.808 18.6835C162.529 18.4194 163.261 18.2873 164.006 18.2873C165.086 18.2873 166.035 18.4674 166.851 18.8276C167.668 19.1878 168.34 19.7282 168.869 20.4486C169.397 21.1691 169.781 22.0696 170.021 23.1503L169.445 23.0062L169.697 22.3938C169.961 21.8415 170.322 21.3252 170.778 20.8449C171.258 20.3405 171.799 19.8963 172.399 19.512C172.999 19.1278 173.636 18.8276 174.308 18.6115C174.98 18.3954 175.641 18.2873 176.289 18.2873C177.706 18.2873 178.871 18.5755 179.783 19.1518C180.72 19.7282 181.416 20.6047 181.873 21.7814C182.353 22.9582 182.593 24.4231 182.593 26.1761V37.5231H178.847V26.3923C178.847 25.3116 178.703 24.4351 178.415 23.7626C178.15 23.0662 177.742 22.5499 177.19 22.2137C176.637 21.8775 175.929 21.7094 175.065 21.7094C174.392 21.7094 173.756 21.8295 173.155 22.0696C172.579 22.2857 172.075 22.5979 171.642 23.0062C171.21 23.4144 170.874 23.8947 170.634 24.4471C170.394 24.9754 170.274 25.5638 170.274 26.2121V37.5231H166.527V26.3202C166.527 25.3356 166.383 24.5071 166.095 23.8347C165.807 23.1383 165.387 22.6099 164.834 22.2497C164.282 21.8895 163.609 21.7094 162.817 21.7094C162.145 21.7094 161.52 21.8295 160.944 22.0696C160.368 22.2857 159.863 22.5979 159.431 23.0062C158.999 23.3904 158.662 23.8587 158.422 24.411C158.182 24.9394 158.062 25.5157 158.062 26.1401V37.5231H154.316Z",
        fill: "var(--dm-text-color)"
      }),
      createBaseVNode("path", {
        d: "M194.477 37.8833C192.916 37.8833 191.487 37.451 190.19 36.5865C188.917 35.722 187.897 34.5453 187.128 33.0563C186.36 31.5674 185.976 29.8864 185.976 28.0133C185.976 26.1161 186.36 24.4351 187.128 22.9702C187.921 21.4812 188.977 20.3165 190.298 19.476C191.643 18.6355 193.144 18.2152 194.801 18.2152C195.786 18.2152 196.686 18.3593 197.503 18.6475C198.319 18.9357 199.028 19.3439 199.628 19.8723C200.252 20.3766 200.757 20.9649 201.141 21.6373C201.549 22.3098 201.801 23.0302 201.897 23.7987L201.069 23.5105V18.6115H204.815V37.5231H201.069V33.0203L201.933 32.7682C201.789 33.4166 201.489 34.053 201.033 34.6773C200.601 35.2777 200.036 35.818 199.34 36.2983C198.667 36.7786 197.911 37.1629 197.07 37.451C196.254 37.7392 195.389 37.8833 194.477 37.8833ZM195.449 34.4612C196.578 34.4612 197.575 34.185 198.439 33.6327C199.304 33.0804 199.976 32.3239 200.456 31.3633C200.961 30.3787 201.213 29.262 201.213 28.0133C201.213 26.7885 200.961 25.6958 200.456 24.7352C199.976 23.7747 199.304 23.0182 198.439 22.4659C197.575 21.9135 196.578 21.6373 195.449 21.6373C194.345 21.6373 193.36 21.9135 192.496 22.4659C191.655 23.0182 190.983 23.7747 190.478 24.7352C189.998 25.6958 189.758 26.7885 189.758 28.0133C189.758 29.262 189.998 30.3787 190.478 31.3633C190.983 32.3239 191.655 33.0804 192.496 33.6327C193.36 34.185 194.345 34.4612 195.449 34.4612Z",
        fill: "var(--dm-text-color)"
      }),
      createBaseVNode("path", {
        d: "M211.977 37.5231V13.7845H215.687V37.5231H211.977ZM208.05 22.2137V18.6115H220.082V22.2137H208.05Z",
        fill: "var(--dm-text-color)"
      }),
      createBaseVNode("path", {
        d: "M231.75 37.8833C229.804 37.8833 228.075 37.4751 226.562 36.6586C225.073 35.818 223.897 34.6773 223.032 33.2365C222.192 31.7956 221.771 30.1386 221.771 28.2654C221.771 26.7765 222.012 25.4197 222.492 24.1949C222.972 22.9702 223.633 21.9135 224.473 21.025C225.338 20.1124 226.358 19.416 227.535 18.9357C228.736 18.4314 230.032 18.1792 231.425 18.1792C232.65 18.1792 233.791 18.4194 234.847 18.8997C235.904 19.3559 236.817 19.9923 237.585 20.8088C238.378 21.6253 238.978 22.5979 239.386 23.7266C239.818 24.8313 240.023 26.044 239.999 27.3649L239.963 28.9498H224.509L223.681 25.996H236.757L236.216 26.6084V25.7439C236.144 24.9514 235.88 24.2429 235.424 23.6186C234.967 22.9942 234.391 22.5019 233.695 22.1417C232.998 21.7814 232.242 21.6013 231.425 21.6013C230.129 21.6013 229.036 21.8535 228.147 22.3578C227.259 22.8381 226.586 23.5585 226.13 24.5191C225.674 25.4557 225.446 26.6204 225.446 28.0133C225.446 29.3341 225.722 30.4868 226.274 31.4714C226.827 32.432 227.607 33.1764 228.616 33.7047C229.624 34.2331 230.789 34.4972 232.11 34.4972C233.046 34.4972 233.911 34.3411 234.703 34.0289C235.52 33.7168 236.396 33.1524 237.333 32.3359L239.206 34.9655C238.63 35.5419 237.921 36.0462 237.081 36.4785C236.264 36.9107 235.388 37.2589 234.451 37.5231C233.539 37.7632 232.638 37.8833 231.75 37.8833Z",
        fill: "var(--dm-text-color)"
      })
    ])
  ])
], -1));
var JM = defineComponent({
  __name: "Documate",
  props: {
    endpoint: { default: "" },
    buttonLabel: { default: "Ask AI" },
    placeholder: { default: "Ask a question..." },
    predefinedQuestions: { default: () => [] }
  },
  setup(t) {
    const e = t, n = ref(false), o = ref(""), r = ref([]), s = ref(false), i = ref(null);
    let c = ref(false), l = 0, a = false;
    function u(h10) {
      c.value = true, f(h10);
    }
    const p = (h10) => new kM().render(h10);
    async function f(h10) {
      if (h10) {
        if (!e.endpoint) {
          console.error("Props endpoint is not provide");
          return;
        }
        s.value = true, r.value.push({ role: "user", content: h10, id: ++l });
        try {
          const m = await fetch(e.endpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              question: h10
            })
          });
          s.value = false;
          async function C(y, w) {
            const b = y == null ? void 0 : y.pipeThrough(new TextDecoderStream()).getReader();
            for (; b; ) {
              let T = await b.read();
              if (T.done)
                break;
              const I = T.value;
              if (I)
                for (let S of I) {
                  const x = r.value.findIndex((D) => D.role === "assistant" && D.id === w), A = S;
                  A && (i.value && (i.value.scrollTop = i.value.scrollHeight), x === -1 ? r.value.push({ role: "assistant", content: A, id: w }) : r.value[x].content += A);
                }
            }
          }
          C(m.body, l);
        } catch (m) {
          console.log(m);
        }
      }
    }
    const d = (h10) => {
      if (c.value) {
        c.value = false, o.value = "";
        return;
      }
      h10.preventDefault(), f(o.value), k(), o.value = "";
    }, v = computed(
      () => o.value === "" ? e.predefinedQuestions : e.predefinedQuestions.filter((h10) => h10.toLowerCase().includes(o.value))
    ), g = (h10) => {
      h10.key === "Meta" && (a = true), a && h10.key === "/" && (n.value = true), h10.key === "Escape" && (n.value = false);
    }, k = () => {
      i.value && (i.value.scrollTop = i.value.scrollHeight);
    };
    return onMounted(() => {
      window.addEventListener("keydown", g), window.addEventListener("keyup", (h10) => {
        h10.key === "Meta" && (a = false);
      });
    }), onBeforeUnmount(() => {
      window.removeEventListener("keydown", g), window.removeEventListener("keyup", () => {
      });
    }), (h10, m) => (openBlock(), createElementBlock(Fragment, null, [
      createBaseVNode("button", {
        type: "button",
        class: "documate-button",
        "aria-label": "Ask AI",
        onClick: m[0] || (m[0] = (C) => n.value = true)
      }, wM),
      createVNode(unref(xo), {
        show: n.value,
        as: "template",
        appear: ""
      }, {
        default: withCtx(() => [
          createVNode(unref(ns), {
            as: "div",
            class: "dialog",
            onClose: m[2] || (m[2] = (C) => n.value = false)
          }, {
            default: withCtx(() => [
              createVNode(unref(zt), {
                as: "template",
                class: "enter enter-from enter-to leave leave-from leave-to"
              }, {
                default: withCtx(() => [
                  AM
                ]),
                _: 1
              }),
              createBaseVNode("div", EM, [
                createVNode(unref(zt), { as: "template" }, {
                  default: withCtx(() => [
                    createVNode(unref(os), { class: "dialog-panel" }, {
                      default: withCtx(() => [
                        createVNode(unref(qr), { "onUpdate:modelValue": u }, {
                          default: withCtx(() => [
                            createBaseVNode("div", DM, [
                              SM,
                              createVNode(unref(Tr), {
                                class: "chat-input",
                                placeholder: h10.placeholder,
                                "aria-autocomplete": "false",
                                onChange: m[1] || (m[1] = (C) => o.value = C.target.value),
                                onKeyup: withKeys(d, ["enter"]),
                                value: o.value,
                                autocomplete: "off"
                              }, null, 8, ["placeholder", "onKeyup", "value"])
                            ]),
                            e.predefinedQuestions.length > 0 && !r.value.length ? (openBlock(), createBlock(unref(Fr), {
                              key: 0,
                              static: "",
                              class: "combobox-options"
                            }, {
                              default: withCtx(() => [
                                e.predefinedQuestions.length > 0 ? (openBlock(), createElementBlock("li", qM, [
                                  createBaseVNode("ul", TM, [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(v.value, (C) => (openBlock(), createBlock(unref(Lr), {
                                      key: C,
                                      value: C,
                                      as: "template"
                                    }, {
                                      default: withCtx(({ active: y }) => [
                                        createBaseVNode("li", {
                                          class: normalizeClass(["combobox-option", { active: y }])
                                        }, [
                                          FM,
                                          createBaseVNode("span", LM, toDisplayString(C), 1)
                                        ], 2)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]))), 128))
                                  ])
                                ])) : createCommentVNode("", true)
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            e.predefinedQuestions.length === 0 && r.value.length === 0 ? (openBlock(), createElementBlock("div", RM, PM)) : createCommentVNode("", true),
                            r.value.length ? (openBlock(), createElementBlock("div", {
                              key: 2,
                              static: "",
                              class: "combobox-options",
                              ref_key: "chatContainer",
                              ref: i
                            }, [
                              createBaseVNode("ul", IM, [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(r.value, (C, y) => (openBlock(), createElementBlock("li", {
                                  class: "question-anwser-item",
                                  key: y
                                }, [
                                  C.role === "user" ? (openBlock(), createElementBlock("div", MM, [
                                    BM,
                                    createTextVNode(" " + toDisplayString(C.content), 1)
                                  ])) : C.role === "assistant" && !C.content ? (openBlock(), createElementBlock("div", NM, zM)) : C.role === "assistant" && C.content ? (openBlock(), createElementBlock("div", VM, [
                                    jM,
                                    createBaseVNode("div", {
                                      class: "markdown-body",
                                      innerHTML: p(C.content)
                                    }, null, 8, UM)
                                  ])) : createCommentVNode("", true)
                                ]))), 128)),
                                createBaseVNode("li", null, [
                                  withDirectives(createBaseVNode("div", HM, ZM, 512), [
                                    [vShow, s.value]
                                  ])
                                ])
                              ])
                            ], 512)) : createCommentVNode("", true),
                            WM
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
});
var KM = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, r] of e)
    n[o] = r;
  return n;
};
var QM = KM(JM, [["__scopeId", "data-v-c65fa87c"]]);
export {
  QM as default
};
//# sourceMappingURL=@documate_vue.js.map
