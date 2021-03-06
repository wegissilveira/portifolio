$(function(){
    $.getScript('../../data/projetosData.js', function() {

        $.each(returnData(), (index, value) => {
            
            const card_block_El = $('<div></div>')
            card_block_El.appendTo('.projects_container')

            /* CARD */
            const card_container_El = $('<div></div>')
            card_container_El.addClass('projects_card_container')
            card_container_El.appendTo(card_block_El)

            const card_subContainer_El = $('<div></div>')
            card_subContainer_El.addClass('projects_card_subContainer')
            card_subContainer_El.appendTo(card_container_El)

            const card_title_El = $(`<div><p>${value.nome}</p></div>`)
            card_title_El.appendTo(card_container_El)

            const card_img_div_El = $('<div></div>')
            const card_img_El = $('<img>')
            card_img_El.attr('src', value.cover)
            card_img_El.appendTo(card_img_div_El)
            card_img_div_El.appendTo(card_subContainer_El)

            const card_verse_container_El = $('<div></div>')
            card_verse_container_El.addClass('projects_card_verse')
            card_verse_container_El.appendTo(card_subContainer_El)

            const card_verse_subContainer_El = $('<div></div>')
            card_verse_subContainer_El.appendTo(card_verse_container_El)

            const project_technologies_El = $('<div></div>')
            project_technologies_El.appendTo(card_verse_subContainer_El)

            $.each(value.tecnologias, (idx, val) => {
                const technology_icon_El = $('<i></i>')
                technology_icon_El.addClass(val[1])
                technology_icon_El.css('color', val[2])
                technology_icon_El.appendTo(project_technologies_El)
            })

            const verse_separator_El = $('<p></p>')
            verse_separator_El.appendTo(card_verse_subContainer_El)

            const project_links_container_El = $('<div></div>')
            project_links_container_El.appendTo(card_verse_subContainer_El)

            const open_modal_icon_El = $('<i></i>')
            open_modal_icon_El.addClass('fas fa-eye')
            open_modal_icon_El.css('color', '#019AFF')
            open_modal_icon_El.css('margin', '0')
            open_modal_icon_El.on('click', () => toggleSlider(index + 1))
            open_modal_icon_El.appendTo(project_links_container_El)

            $.each(value.links, (idx, val) => {
                const project_link_El = $('<a></a>')
                project_link_El.attr('href', val[1])
                project_link_El.appendTo(project_links_container_El)

                const link_icon_El = $('<i></i>')
                link_icon_El.addClass(val[2])
                link_icon_El.css('color', val[3])
                link_icon_El.appendTo(project_link_El)
            })
            

            /* MODAL */
            const modal_container_El = $('<div></div>')
            modal_container_El.addClass('projects_modal_container modal_closed')
            modal_container_El.attr('id', `products_modal-${index+1}`)
            modal_container_El.appendTo(card_block_El)

            const modal_body_El = $('<div></div>')
            modal_body_El.addClass('modal_body')
            modal_body_El.appendTo(modal_container_El)

            const slider_container_El = $('<div></div>')
            slider_container_El.addClass('slider_container')
            slider_container_El.appendTo(modal_body_El)

            const main_img_div_El = $('<div></div>')
            main_img_div_El.appendTo(slider_container_El)

            const main_img_El = $('<img>')
            main_img_El.attr('src', value.imgs[0])
            main_img_El.attr('id', `main_img-${index}`)
            main_img_El.appendTo(main_img_div_El)

            const slider_thumbs_div_El = $('<div></div>')
            slider_thumbs_div_El.addClass('slider_thumbs_container')
            slider_thumbs_div_El.appendTo(slider_container_El)
            
            $.each(value.imgs, (idx, val) => {
                const slider_thumb_El = $('<img>')
                slider_thumb_El.addClass(idx === 0 ? 'active_thumb' : null)
                slider_thumb_El.attr('src', val)
                slider_thumb_El.on('mouseover', () => changeMainImage(val, index, slider_thumb_El))
                slider_thumb_El.appendTo(slider_thumbs_div_El)
                
            })

            const modal_info_container_El = $('<div></div>')
            modal_info_container_El.addClass('links_container')
            modal_info_container_El.appendTo(modal_body_El)

            const modal_technologies_container_El = $('<div></div>')
            modal_technologies_container_El.appendTo(modal_info_container_El)

            modal_technologies_title_El = $('<h1>Tecnologias utilizadas</h1>')
            modal_technologies_title_El.appendTo(modal_technologies_container_El)

            technologies_icons_container_El = $('<div></div>')
            technologies_icons_container_El.appendTo(modal_technologies_container_El)

            $.each(value.tecnologias, (idx, val) => {
                const technology_icon_El = $('<i></i>')
                technology_icon_El.addClass(val[1])
                technology_icon_El.css('color', val[2])
                technology_icon_El.appendTo(technologies_icons_container_El)
            })

            const modal_links_container_El = $('<div></div>')
            modal_links_container_El.appendTo(modal_info_container_El)

            modal_links_title_El = $('<h1>Links</h1>')
            modal_links_title_El.appendTo(modal_links_container_El)

            links_icons_container_El = $('<div></div>')
            links_icons_container_El.appendTo(modal_links_container_El)

            $.each(value.links, (idx, val) => {
                const project_link_El = $('<a></a>')
                project_link_El.attr('href', val[1])
                project_link_El.appendTo(links_icons_container_El)

                const link_icon_El = $('<i></i>')
                link_icon_El.addClass(val[2])
                link_icon_El.css('color', val[3])
                link_icon_El.appendTo(project_link_El)
            })

            const toggle_out_slider_icon_El = $('<i></i>')
            toggle_out_slider_icon_El.addClass('fas fa-sign-out-alt')
            toggle_out_slider_icon_El.on('click', () => toggleSlider(index+1))
            toggle_out_slider_icon_El.appendTo(modal_body_El)
        })




    }).fail(function(jqxhr, settings, exceptions) {
        console.log('error:')
        console.log(exception)
    })
})