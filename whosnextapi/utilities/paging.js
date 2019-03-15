const Promise = require("bluebird");

function paging(data, funcs, query, dbquery) {
  let page = {};

  page["pageNumber"] = query.PageNumber;
  page["numberOfContentPerPage"] = query.NumberOfContentPerPage;
  page["sortProperty"] = query.SortProperty;
  page["orderByDescending"] = query.OrderByDescending;
  page["searchText"] = "";

  let dborders = [
    [query.SortProperty, query.OrderByDescending ? "DESC" : "ASC"]
  ];

  let contents = data[funcs[0]](
    dbquery,
    dborders,
    parseInt(page.pageNumber) * parseInt(page.numberOfContentPerPage),
    parseInt(page.numberOfContentPerPage)
  ).then(items => {
    page["contents"] = items.map(item => item.toJSON());
  });

  let totalCount = data[funcs[1]](dbquery).then(count => {
    page["totalCount"] = count;
  });

  return Promise.all([contents, totalCount]).then(() => {
    return page;
  });
}

module.exports = paging;
