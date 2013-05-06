/*
 * bootstrap-filestyle
 * http://markusslima.github.com/bootstrap-filestyle/
 *
 * Copyright (c) 2013 Markus Lima
 * Licensed under the MIT license.
 */
(function(a){a.fn.filestyle=function(c){if(typeof c==="object"||typeof c==="undefined"){var b={buttonText:"Choose file",textField:true,icon:false,classButton:"",classText:"",classIcon:"icon-folder-open"};c=a.extend(b,c);return this.each(function(){var f=a(this);if(!f.data("filestyle")){var d=f.attr("name")||f.attr("id");f.data("filestyle",true);var e=f.parents(".control-group");if(!e.length){e=a("<div></div>");f.before(e);e.append(f)}e.addClass("input-append");f.css({position:"fixed",top:"-100px",left:"-100px"}).after((c.textField?'<input type="text" class="'+c.classText+'" disabled size="40" /> ':"")+'<a href="#" class="btn '+c.classButton+'" >'+(c.icon?'<i class="'+c.classIcon+'"></i> ':"")+c.buttonText+"</a>");f.change(function(){f.parent().children(":text").val(a(this).val().split("\\").pop())});f.parent().children("a").click(function(){f.click();return false})}})}else{return this.each(function(){var d=a(this);if(d.data("filestyle")===true&&c==="clear"){d.parent().children(":text").val("");d.val("")}else{window.console.error("Method filestyle not defined!")}})}}}(jQuery));