(function ()
{
    function string(string, mask_char, percent)
    {

    }

    function domain(domain, mask_char, percent)
    {

    }

    function email(email)
    {

    }

    // Export public API
    var datamask = {};

    datamask.string = string;
    datamask.domain = domain;
    datamask.email = email;

    module.exports = datamask;
}());