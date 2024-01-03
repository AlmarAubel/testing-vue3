import type { Args, StoryAnnotations } from '@storybook/types';
import type { VueRenderer } from "@storybook/vue3";
export type TestingStory<TArgs = Args> = StoryAnnotations<VueRenderer, TArgs>;
export declare const isInvalidStory: (story?: any) => boolean;
type Entries<T> = {
    [K in keyof T]: [K, T[K]];
}[keyof T];
export declare function objectEntries<T extends object>(t: T): Entries<T>[];
export declare const getStoryName: (story: TestingStory) => string | undefined;
export {};
