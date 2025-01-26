const routes = {
    '/': 'x-app',
    '/add': 'employee-form',
    '/edit/:id': 'employee-form',
    '/delete/:id': 'employee-form',
  };
  
  export function initializeRouter() {
    const outlet = document.getElementsByTagName('body')[0];
    window.addEventListener('popstate', () => navigate(location.pathname, outlet));
    navigate(location.pathname, outlet);
  
    document.body.addEventListener('click', e => {
      const originalTarget=e.composedPath()[0];
      if (originalTarget.hasAttribute('data-link')) {
        e.preventDefault();
        history.pushState(null, '', originalTarget.href);
        navigate(location.pathname, outlet);
      }
    });
  }
  
  function navigate(path, outlet) {
    const route = Object.keys(routes).find(r => matchRoute(r, path));
    if (!route) {
      outlet.innerHTML = '<h1>Page Not Found</h1>';
      return;
    }
    const componentName = routes[route];
    const params = extractParams(route, path);

    outlet.innerHTML = `<${componentName} params=${JSON.stringify(params)}></${componentName}>`;
  }
  
  function matchRoute(route, path) {
    const routeRegex = new RegExp(`^${route.replace(/:\w+/g, '([^/]+)')}$`);
    return routeRegex.test(path);
  }
  
  function extractParams(route, path) {
    const routeParts = route.split('/');
    const pathParts = path.split('/');
    return routeParts.reduce((params, part, index) => {
      if (part.startsWith(':')) {
        params[part.slice(1)] = pathParts[index];
      }
      return params;
    }, {});
  }
  