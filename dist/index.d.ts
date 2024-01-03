import type { Args, LegacyStoryAnnotationsOrFn, ProjectAnnotations, Store_CSFExports } from '@storybook/types';
import type { VueRenderer, Meta } from "@storybook/vue3";
import { PreparedStoryFn, StoriesWithPartialProps } from './types';
/** Function that sets the global config of your storybook. The global config is the preview module of your .storybook folder.
 *
 * It should be run a single time, so that your global config (e.g. decorators) is applied to your stories when using `composeStories` or `composeStory`.
 *
 * Example:
 *```jsx
 * // setup.js (for jest)
 * import { setProjectAnnotations } from '@storybook/testing-vue3';
 * import * as projectAnnotations from './.storybook/preview';
 *
 * setProjectAnnotations(projectAnnotations);
 *```
 *
 * @param projectAnnotations - e.g. (import * as projectAnnotations from '../.storybook/preview')
 */
export declare function setProjectAnnotations(projectAnnotations: ProjectAnnotations<VueRenderer> | ProjectAnnotations<VueRenderer>[]): void;
/**
 *
 * @deprecated Use setProjectAnnotations instead
 */
export declare function setGlobalConfig(projectAnnotations: ProjectAnnotations<VueRenderer> | ProjectAnnotations<VueRenderer>[]): void;
/**
 * Function that will receive a story along with meta (e.g. a default export from a .stories file)
 * and optionally projectAnnotations e.g. (import * from '../.storybook/preview)
 * and will return a composed component that has all args/parameters/decorators/etc combined and applied to it.
 *
 *
 * It's very useful for reusing a story in scenarios outside of Storybook like unit testing.
 *
 * Example:
 *```jsx
 * import { render } from '@testing-library/vue3';
 * import { composeStory } from '@storybook/testing-vue3';
 * import Meta, { Primary as PrimaryStory } from './Button.stories';
 *
 * const Primary = composeStory(PrimaryStory, Meta);
 *
 * test('renders primary button with Hello World', () => {
 *   const { getByText } = render(Primary({ label: 'Hello world' }));
 *   expect(getByText(/Hello world/i)).not.toBeNull();
 * });
 *```
 *
 * @param story
 * @param componentAnnotations - e.g. (import Meta from './Button.stories')
 * @param [projectAnnotations] - e.g. (import * as projectAnnotations from '../.storybook/preview') this can be applied automatically if you use `setProjectAnnotations` in your setup files.
 * @param [exportsName] - in case your story does not contain a name and you want it to have a name.
 */
export declare function composeStory<TArgs extends Args = Args>(story: LegacyStoryAnnotationsOrFn<VueRenderer, TArgs>, componentAnnotations: Meta<TArgs | any>, projectAnnotations?: ProjectAnnotations<VueRenderer>, exportsName?: string): PreparedStoryFn<VueRenderer, Partial<TArgs>>;
/**
 * Function that will receive a stories import (e.g. `import * as stories from './Button.stories'`)
 * and optionally projectAnnotations (e.g. `import * from '../.storybook/preview`)
 * and will return an object containing all the stories passed, but now as a composed component that has all args/parameters/decorators/etc combined and applied to it.
 *
 *
 * It's very useful for reusing stories in scenarios outside of Storybook like unit testing.
 *
 * Example:
 *```jsx
 * import { render } from '@testing-library/vue3';
 * import { composeStories } from '@storybook/testing-vue3';
 * import * as stories from './Button.stories';
 *
 * const { Primary, Secondary } = composeStories(stories);
 *
 * test('renders primary button with Hello World', () => {
 *   const { getByText } = render(Primary({ label: 'Hello world' }));
 *   expect(getByText(/Hello world/i)).not.toBeNull();
 * });
 *```
 *
 * @param storiesImport - e.g. (import * as stories from './Button.stories')
 * @param [projectAnnotations] - e.g. (import * as projectAnnotations from '../.storybook/preview') this can be applied automatically if you use `setProjectAnnotations` in your setup files.
 */
export declare function composeStories<TModule extends Store_CSFExports<VueRenderer, any>>(storiesImport: TModule, globalConfig?: ProjectAnnotations<VueRenderer>): Omit<StoriesWithPartialProps<VueRenderer, TModule>, keyof Store_CSFExports>;
