    export interface Meta {
        status: number;
    }

    export interface Dom {
        tag: string;
        children: any[];
    }

    export interface Description {
        dom: Dom;
    }

    export interface Interactions {
        following: boolean;
    }

    export interface CurrentUserMetadata {
        permissions: string[];
        excluded_permissions: string[];
        interactions: Interactions;
    }

    export interface Range {
        content: string;
    }

    export interface Annotatable {
        api_path: string;
        context?: any;
        id: number;
        image_url: string;
        link_title: string;
        title: string;
        type: string;
        url: string;
    }

    export interface Dom2 {
        tag: string;
        children: any[];
    }

    export interface Body {
        dom: Dom2;
    }

    export interface Interactions2 {
        cosign: boolean;
        pyong: boolean;
        vote?: any;
    }

    export interface IqByAction {
    }

    export interface CurrentUserMetadata2 {
        permissions: string[];
        excluded_permissions: string[];
        interactions: Interactions2;
        iq_by_action: IqByAction;
    }

    export interface BoundingBox {
        width: number;
        height: number;
    }

    export interface Tiny {
        url: string;
        bounding_box: BoundingBox;
    }

    export interface BoundingBox2 {
        width: number;
        height: number;
    }

    export interface Thumb {
        url: string;
        bounding_box: BoundingBox2;
    }

    export interface BoundingBox3 {
        width: number;
        height: number;
    }

    export interface Small {
        url: string;
        bounding_box: BoundingBox3;
    }

    export interface BoundingBox4 {
        width: number;
        height: number;
    }

    export interface Medium {
        url: string;
        bounding_box: BoundingBox4;
    }

    export interface Avatar {
        tiny: Tiny;
        thumb: Thumb;
        small: Small;
        medium: Medium;
    }

    export interface Interactions3 {
        following: boolean;
    }

    export interface CurrentUserMetadata3 {
        permissions: any[];
        excluded_permissions: string[];
        interactions: Interactions3;
    }

    export interface User {
        api_path: string;
        avatar: Avatar;
        header_image_url: string;
        human_readable_role_for_display: string;
        id: number;
        iq: number;
        login: string;
        name: string;
        role_for_display: string;
        url: string;
        current_user_metadata: CurrentUserMetadata3;
    }

    export interface Author {
        attribution: number;
        pinned_role?: any;
        user: User;
    }

    export interface Annotation {
        api_path: string;
        body: Body;
        comment_count: number;
        community: boolean;
        custom_preview?: any;
        has_voters: boolean;
        id: number;
        pinned: boolean;
        share_url: string;
        source?: any;
        state: string;
        url: string;
        verified: boolean;
        votes_total: number;
        current_user_metadata: CurrentUserMetadata2;
        authors: Author[];
        cosigned_by: any[];
        rejection_comment?: any;
        verified_by?: any;
    }

    export interface DescriptionAnnotation {
        _type: string;
        annotator_id: number;
        annotator_login: string;
        api_path: string;
        classification: string;
        fragment: string;
        id: number;
        is_description: boolean;
        path: string;
        range: Range;
        song_id?: any;
        url: string;
        verified_annotator_ids: any[];
        annotatable: Annotatable;
        annotations: Annotation[];
    }

    export interface Artist {
        alternate_names: string[];
        api_path: string;
        description: Description;
        facebook_name?: any;
        followers_count: number;
        header_image_url: string;
        id: number;
        image_url: string;
        instagram_name?: any;
        is_meme_verified: boolean;
        is_verified: boolean;
        name: string;
        translation_artist: boolean;
        twitter_name?: any;
        url: string;
        current_user_metadata: CurrentUserMetadata;
        description_annotation: DescriptionAnnotation;
        user?: any;
    }

    export interface Response {
        artist: Artist;
    }

    export interface Artist {
        meta: Meta;
        response: Response;
    }
