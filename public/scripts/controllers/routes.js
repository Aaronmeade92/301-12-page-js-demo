// This is where we define the client-side routes

// page(route, callback)

page('/', homeView.init);
page('/about', aboutView.init);
page('/lola-ftw', contactView.init);

page();
