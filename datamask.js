(function ()
{
    function string(value, mask_char, percent)
    {
    	return value;
    }

    function domain(value, mask_char, percent)
    {
		return value;
    }

    function email(address)
    {
    	if (address.indexOf('@') !== -1) //has @ symbol
    	{
    		var email_parts = address.split('@');
    		
    		var masked_user = string(email_parts[0], '*', 50);
			var masked_domain = domain(email_parts[1],'*' , 60);
    		return(masked_user + '@' + masked_domain);
    	}
    	else //else no at, just mask the whole input
    	{
    		return string(address, '*', 50);
    	}
		
    }

    // Export public API
    var datamask = {};

    datamask.string = string;
    datamask.domain = domain;
    datamask.email = email;

    module.exports = datamask;
}());