export class University{
  name;
  country;
  domains;
  web_pages;

  constructor(_name, _country, _domains, _web_pages) {
    this.name = _name;
    this.country = _country;
    this.domains = _domains;
    this.web_pages = _web_pages
  }
}