(function ()
{
	//php.js
	function str_repeat(input, multiplier)
	{
		// http://kevin.vanzonneveld.net
		// + original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		// + improved by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
		// * example 1: str_repeat('-=', 10);
		// * returns 1: '-=-=-=-=-=-=-=-=-=-='
		return new Array(multiplier + 1).join(input);
	}

	//datamask.js
	function string(value, mask_char, percent)
	{
		var len = value.length;
		if (len > 0)
		{
			var mask_count = Math.floor(len * percent / 100);

			var offset = Math.floor((len - mask_count) / 2);

			var masked = value.substr(0, offset) + str_repeat(mask_char, mask_count) + value.substr(mask_count + offset);
			return masked;
		}
		else
		{
			return '';
		}
	}

	function domain(value, mask_char, percent)
	{

		if (value.indexOf('.') !== -1)
		{
			var domain_parts = value.split('.');

			var partsleft = domain_parts.length;

			var domainoutput = '';
			for (var val in domain_parts)
			{
				if (partsleft > 1)
				{
					domainoutput += string(domain_parts[val], mask_char, percent) + '.';
				}
				else
				{
					domainoutput += domain_parts[val];
				}
				partsleft--;
			}
			return domainoutput;

		}
		else
		{
			return string(value, mask_char, percent);
		}
	}

	function email(address, mask_char, user_percent, domain_percent)
	{
		if (mask_char == null)
		{
			mask_char = '*';
		}

		if (user_percent == null)
		{
			user_percent = 50;
		}

		if (domain_percent == null)
		{
			domain_percent = 60;
		}

		if (address.indexOf('@') !== -1) //has @ symbol
		{
			var email_parts = address.split('@');

			var masked_user = string(email_parts[0], mask_char, user_percent);
			var masked_domain = domain(email_parts[1], mask_char, domain_percent);
			return (masked_user + '@' + masked_domain);
		}
		else //else no at, just mask the whole input
		{
			return string(address, mask_char, user_percent);
		}

	}

	// Export public API
	var datamask = {};

	datamask.string = string;
	datamask.domain = domain;
	datamask.email = email;

	module.exports = datamask;
}());