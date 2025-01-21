import { AFrameFactory } from './aframe/aframe'
import { AlmostThereFactory } from './almosttheremodule/almost-there-module'
import { DebugWebViewsFactory } from './debugwebviews/debug-web-views'
import { FullWindowCanvasFactory } from './fullwindowcanvasmodule/full-window-canvas-module'
import { LoadingFactory } from './loadingmodule/loading-module'
import { LifecycleFactory } from './lifecyclemodule/lifecycle'
import { PauseOnBlurFactory } from './pauseonblurmodule/pauseonblur'
import { PauseOnHiddenFactory } from './pauseonhiddenmodule/pauseonhidden'
import { PlayCanvasFactory } from './playcanvas/playcanvas'
import { PwaInstallerFactory } from './pwainstallermodule/pwa-installer-module'
import { RuntimeErrorFactory } from './runtimeerrormodule/runtime-error-module'
import { StatsFactory } from './statsmodule/stats'
import { ThreeExtrasFactory } from './three/three-extras'
import { MediaRecorder } from './mediarecorder/mediarecorder'
import { SessionReconfigureFactory } from './sessionreconfiguremodule/session-reconfigure-module'


export namespace XRExtras {
    export let AFrame: ReturnType<typeof AFrameFactory>;
    export let AlmostThere: ReturnType<typeof AlmostThereFactory>;
    export let DebugWebViews: ReturnType<typeof DebugWebViewsFactory>;
    export let FullWindowCanvas: ReturnType<typeof FullWindowCanvasFactory>;
    export let Lifecycle: ReturnType<typeof LifecycleFactory>;
    export let Loading: ReturnType<typeof LoadingFactory>;
    export let PauseOnBlur: ReturnType<typeof PauseOnBlurFactory>;
    export let PauseOnHidden: ReturnType<typeof PauseOnHiddenFactory>;
    export let PlayCanvas: ReturnType<typeof PlayCanvasFactory>;
    export let PwaInstaller: ReturnType<typeof PwaInstallerFactory>;
    export let RuntimeError: ReturnType<typeof RuntimeErrorFactory>;
    export let Stats: ReturnType<typeof StatsFactory>;
    export let ThreeExtras: ReturnType<typeof ThreeExtrasFactory>;
    export { MediaRecorder };
    export let SessionReconfigure: ReturnType<typeof SessionReconfigureFactory>;
}