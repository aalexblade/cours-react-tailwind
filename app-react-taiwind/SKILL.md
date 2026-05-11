# React Tailwind Master

**Role:** Senior Frontend Architect

## Purpose

Provide a concise, opinionated workspace-scoped skill for building modern, accessible, responsive React components using TypeScript and Tailwind CSS. This skill codifies conventions, templates, and checklists developers should follow in this repository.

## Core Principles

- Modern React: use functional components, React Hooks, and TypeScript (TSX) by default.
- Tailwind-Centric: all styling via Tailwind utility classes; avoid external CSS files.
- Accessibility (A11y): semantic HTML, ARIA attributes, and keyboard support by default.
- Responsive: mobile-first approach; use `sm:`, `md:`, `lg:`, `xl:` breakpoints.
- UI Patterns: soft shadows, rounded corners, interactive states, glassmorphism.
- Class management: use `tailwind-merge` + `clsx` for dynamic classes; organize classes as layout -> spacing -> typography -> effects.

## Conventions

- File type: `.tsx` for components.
- Components: prefer named exports for pure UI components; default export for page-level modules is acceptable.
- Props: strongly type all props and document optional fields.
- Styling: prefer utility-first classes; if a repeated pattern emerges, create a tiny component util (e.g., `Card`, `Badge`).
- Icons: prefer `lucide-react` with subtle ghost text style for inline icons.

## Accessibility Guidelines

- Use semantic elements (`button`, `nav`, `header`, `main`, `form`, `label`, etc.).
- Provide `aria-label`/`aria-labelledby` when the UI control lacks visible text.
- Ensure focus-visible styles (`focus-visible:ring-2 focus-visible:ring-offset-2`) and keyboard operability.
- For complex widgets, include role and keyboard handling notes in doc comments.

## Responsive & UI Patterns

- Mobile-first layout; add `sm:` and up for larger screens.
- Soft shadows: `shadow-md` or `shadow-lg`.
- Rounded corners: `rounded-2xl` or `rounded-full` for pills.
- Interactive states: include `hover:`, `active:`, `focus-visible:` classes.
- Glassmorphism: `bg-white/30 backdrop-blur-md` (use sparingly and test contrast).

## Class Organization (recommended order)

1. Layout (e.g., `flex`, `grid`, `items-center`)
2. Sizing & spacing (e.g., `w-full`, `p-4`, `gap-3`)
3. Typography (e.g., `text-sm`, `font-medium`)
4. Color (e.g., `text-slate-700`, `bg-white/30`)
5. Effects (e.g., `shadow-md`, `backdrop-blur-md`)
6. States (e.g., `hover:scale-105`, `focus-visible:ring`)

Always prefer grouping utilities logically in that order for readability.

## Recommended Libraries & Usage

- `clsx` for conditional classnames.
- `tailwind-merge` to resolve class conflicts when merging dynamic classes.
- `lucide-react` for icons; use `aria-hidden` on decorative icons and provide accessible labels for meaningful icons.

## Component Template (TSX)

```tsx
import { FC } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { Check } from "lucide-react";

type CardProps = {
  className?: string;
  title: string;
  description?: string;
};

export const Card: FC<CardProps> = ({ className, title, description }) => {
  const base =
    "flex flex-col p-4 rounded-2xl bg-white/30 backdrop-blur-md shadow-md";
  const classes = twMerge(clsx(base, className));

  return (
    <article className={classes} aria-labelledby="card-title">
      <h3 id="card-title" className="text-lg font-semibold text-slate-800">
        {title}
      </h3>
      {description && (
        <p className="mt-2 text-sm text-slate-600">{description}</p>
      )}
      <div className="mt-4 flex items-center gap-2">
        <Check className="text-slate-500 w-4 h-4" aria-hidden />
        <span className="text-xs text-slate-500">Example action</span>
      </div>
    </article>
  );
};
```

## Checklist (pre-merge)

- [ ] Component uses `.tsx` and typed props.
- [ ] No external CSS files; Tailwind classes only.
- [ ] Classes follow recommended ordering.
- [ ] Uses `clsx` + `tailwind-merge` when classes are dynamic.
- [ ] Accessibility: semantic tags, ARIA labels where needed, keyboard focus states.
- [ ] Responsive: mobile-first, tested at `sm`/`md` breakpoints.
- [ ] Icons: `lucide-react` used with proper accessibility.

## Example Prompts (for this skill)

- "Create an accessible card component in TSX using Tailwind and lucide-react."
- "Refactor `Button.tsx` to use `tailwind-merge` and add focus-visible styles."
- "Generate a responsive navbar with mobile menu and ARIA attributes."

## Clarifying Questions / Ambiguities

- Scope: should this be workspace-scoped (shared rules) or per-developer personal preferences?
- Naming: any preferred folder for shared UI primitives (e.g., `src/components/ui`)?
- Design tokens: are there custom Tailwind theme extensions (colors, radii) to enforce here?

## Iteration Plan

1. Draft skill (this file).
2. Identify gaps and ask clarifying questions (see above).
3. Update templates and examples per feedback.

---

If you want, I can now:

- Place this file in a specific folder (e.g., `.github/`, `.vscode/`, or `docs/`).
- Generate a small `src/components/ui/Card.tsx` using the template above.
