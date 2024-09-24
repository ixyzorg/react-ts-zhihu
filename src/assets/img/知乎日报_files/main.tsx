import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7219aa3d"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import "/src/assets/style/index.scss?t=1726986034871";
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=7219aa3d"; const createRoot = __vite__cjsImport2_reactDom_client["createRoot"];
import App from "/src/App.tsx?t=1726991112137";
import "/node_modules/.vite/deps/amfe-flexible.js?v=7219aa3d";
import { ConfigProvider } from "/node_modules/.vite/deps/antd-mobile.js?v=7219aa3d";
import zhCN from "/node_modules/.vite/deps/antd-mobile_es_locales_zh-CN.js?v=7219aa3d";
(function() {
  const handleMaxWidth = () => {
    const rootElement = document.querySelector("#root");
    rootElement.style.maxWidth = `${750}px`;
    if (window.innerWidth >= 750) {
      document.documentElement.style.fontSize = "75px";
    }
  };
  handleMaxWidth();
  window.addEventListener("resize", handleMaxWidth);
})();
if (window.location.hash === "") {
  const { origin, pathname, search } = window.location;
  const newHash = `#${pathname}${search}`;
  window.location.replace(`${origin}/${newHash}`);
}
const root = createRoot(document.getElementById("root"));
root.render(
  /* @__PURE__ */ jsxDEV(ConfigProvider, { locale: zhCN, children: /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
    fileName: "/Users/fumengdi/Desktop/project/react-ts-mobile/src/main.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "/Users/fumengdi/Desktop/project/react-ts-mobile/src/main.tsx",
    lineNumber: 30,
    columnNumber: 3
  }, this)
);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBOEJJO0FBOUJKLE9BQU87QUFDUCxTQUFTQSxrQkFBa0I7QUFDM0IsT0FBT0MsU0FBUztBQUNoQixPQUFPO0FBRVAsU0FBU0Msc0JBQXNCO0FBQy9CLE9BQU9DLFVBQVU7QUFBQSxDQUdmLFdBQVk7QUFDWixRQUFNQyxpQkFBaUJBLE1BQU07QUFDM0IsVUFBTUMsY0FBY0MsU0FBU0MsY0FBYyxPQUFPO0FBQ2xERixnQkFBWUcsTUFBTUMsV0FBVyxHQUFHLEdBQUc7QUFDbkMsUUFBSUMsT0FBT0MsY0FBYyxLQUFLO0FBQzVCTCxlQUFTTSxnQkFBZ0JKLE1BQU1LLFdBQVc7QUFBQSxJQUM1QztBQUFBLEVBQ0Y7QUFDQVQsaUJBQWU7QUFDZk0sU0FBT0ksaUJBQWlCLFVBQVVWLGNBQWM7QUFDbEQsR0FBRztBQUVILElBQUlNLE9BQU9LLFNBQVNDLFNBQVMsSUFBSTtBQUMvQixRQUFNLEVBQUVDLFFBQVFDLFVBQVVDLE9BQU8sSUFBSVQsT0FBT0s7QUFDNUMsUUFBTUssVUFBVSxJQUFJRixRQUFRLEdBQUdDLE1BQU07QUFDckNULFNBQU9LLFNBQVNNLFFBQVEsR0FBR0osTUFBTSxJQUFJRyxPQUFPLEVBQUU7QUFDaEQ7QUFFQSxNQUFNRSxPQUFPdEIsV0FBV00sU0FBU2lCLGVBQWUsTUFBTSxDQUFFO0FBQ3hERCxLQUFLRTtBQUFBQSxFQUNILHVCQUFDLGtCQUFlLFFBQVFyQixNQUN0QixpQ0FBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSSxLQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFQTtBQUNGIiwibmFtZXMiOlsiY3JlYXRlUm9vdCIsIkFwcCIsIkNvbmZpZ1Byb3ZpZGVyIiwiemhDTiIsImhhbmRsZU1heFdpZHRoIiwicm9vdEVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsIm1heFdpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImRvY3VtZW50RWxlbWVudCIsImZvbnRTaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvY2F0aW9uIiwiaGFzaCIsIm9yaWdpbiIsInBhdGhuYW1lIiwic2VhcmNoIiwibmV3SGFzaCIsInJlcGxhY2UiLCJyb290IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsibWFpbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAL2Fzc2V0cy9zdHlsZS9pbmRleC5zY3NzJ1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnXG5pbXBvcnQgQXBwIGZyb20gJ0AvQXBwJ1xuaW1wb3J0ICdhbWZlLWZsZXhpYmxlJ1xuXG5pbXBvcnQgeyBDb25maWdQcm92aWRlciB9IGZyb20gJ2FudGQtbW9iaWxlJ1xuaW1wb3J0IHpoQ04gZnJvbSAnYW50ZC1tb2JpbGUvZXMvbG9jYWxlcy96aC1DTidcblxuLyog5aSE55CG5pyA5aSn5a695bqmICovXG47KGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgaGFuZGxlTWF4V2lkdGggPSAoKSA9PiB7XG4gICAgY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpIGFzIEhUTUxFbGVtZW50XG4gICAgcm9vdEVsZW1lbnQuc3R5bGUubWF4V2lkdGggPSBgJHs3NTB9cHhgXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDc1MCkge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gJzc1cHgnXG4gICAgfVxuICB9XG4gIGhhbmRsZU1heFdpZHRoKClcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZU1heFdpZHRoKVxufSkoKVxuXG5pZiAod2luZG93LmxvY2F0aW9uLmhhc2ggPT09ICcnKSB7XG4gIGNvbnN0IHsgb3JpZ2luLCBwYXRobmFtZSwgc2VhcmNoIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3QgbmV3SGFzaCA9IGAjJHtwYXRobmFtZX0ke3NlYXJjaH1gXG4gIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGAke29yaWdpbn0vJHtuZXdIYXNofWApXG59XG5cbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykhKVxucm9vdC5yZW5kZXIoXG4gIDxDb25maWdQcm92aWRlciBsb2NhbGU9e3poQ059PlxuICAgIDxBcHAgLz5cbiAgPC9Db25maWdQcm92aWRlcj5cbilcbiJdLCJmaWxlIjoiL1VzZXJzL2Z1bWVuZ2RpL0Rlc2t0b3AvcHJvamVjdC9yZWFjdC10cy1tb2JpbGUvc3JjL21haW4udHN4In0=