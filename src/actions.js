

function initContact(fname,lname,email,employed){
	return { type : 'ADD_CONTACT',
					 payload: { firstName: fname,
					  					lastName: lname,
											email: email,
											employed: employed,
										  key: fname.concat(lname).concat(email)	}}
}
function updateMeta(form, copy, page){
  // let key = form.concat(".").concat(copy).concat(".").concat(page);
  let key = form + '.' + copy + '.' + page;
	return { type: 'UPDATE_META',
					payload: { formname: form,
										copy: copy,
										page: page,
										key : key
									}}
}


export {initContact, updateMeta}
