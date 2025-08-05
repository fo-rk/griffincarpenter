import {
    BlockContentIcon, BlockElementIcon, BookIcon,
    UserIcon, HomeIcon, CreditCardIcon, WrenchIcon,
    BellIcon, BookmarkIcon, CalendarIcon,
    ControlsIcon
} from '@sanity/icons'

export const structure = (S) => {
    return S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Posts')
                .icon(BlockContentIcon)
                .child(
                    S.documentTypeList('post')
                ),
            S.listItem()
                .title('Publications')
                .icon(BookIcon)
                .child(
                    S.documentTypeList('publication')
                ),
            S.listItem()
                .title('Pages')
                .icon(BlockElementIcon)
                .child(
                    S.documentTypeList('page')
                ),
            S.listItem()
                .title('People')
                .icon(UserIcon)
                .child(
                    S.documentTypeList('person')
                ),
            S.listItem()
                .title('Categories')
                .icon(BookmarkIcon)
                .child(
                    S.documentTypeList('category')
                ),
            S.listItem()
                .title("Settings")
                .icon(WrenchIcon)
                .id("settings")
                .child(
                    S.document()
                      .schemaType("settings")
                      .documentId("settings")
                ),
        ])
}
