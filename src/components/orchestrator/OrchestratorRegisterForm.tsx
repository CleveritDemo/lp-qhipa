"use client";

import { FormEvent, useState } from "react";
import FadeIn from "../FadeIn";

interface FormFields {
  name: string;
  email: string;
  role: string;
  team: string;
  level: string;
  goal: string;
  message: string;
  accepted: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  role?: string;
  team?: string;
  level?: string;
  goal?: string;
  accepted?: string;
}

const INITIAL: FormFields = {
  name: "",
  email: "",
  role: "",
  team: "",
  level: "",
  goal: "",
  message: "",
  accepted: false,
};

const LEVEL_OPTIONS = [
  "Explorando IA en mi equipo",
  "Uso copilotos o asistentes puntuales",
  "Coordino agentes en casos concretos",
  "Lidero iniciativas AI-native",
];

const GOAL_OPTIONS = [
  "Refinar backlog y descubrimiento",
  "Acelerar desarrollo y calidad",
  "Orquestar releases y operación",
  "Diseñar una software factory",
];

function isCorporateEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {};

  if (!fields.name.trim()) {
    errors.name = "Ingresa tu nombre completo.";
  }

  if (!fields.email.trim()) {
    errors.email = "Ingresa tu correo corporativo.";
  } else if (!isCorporateEmail(fields.email)) {
    errors.email = "Usa un correo corporativo válido.";
  }

  if (!fields.role.trim()) {
    errors.role = "Indica tu rol actual.";
  }

  if (!fields.team.trim()) {
    errors.team = "Indica tu empresa o equipo.";
  }

  if (!fields.level) {
    errors.level = "Selecciona tu nivel actual.";
  }

  if (!fields.goal) {
    errors.goal = "Selecciona tu objetivo principal.";
  }

  if (!fields.accepted) {
    errors.accepted = "Debes aceptar el aviso de privacidad.";
  }

  return errors;
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1.5 text-sm text-error" role="alert">
      {message}
    </p>
  );
}

export default function OrchestratorRegisterForm() {
  const [fields, setFields] = useState<FormFields>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update =
    (key: keyof FormFields) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      const value =
        event.target.type === "checkbox"
          ? (event.target as HTMLInputElement).checked
          : event.target.value;
      setFields((prev) => ({ ...prev, [key]: value }));
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(fields);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section
        id="registro"
        className="bg-white py-20 sm:py-24"
        aria-labelledby="orchestrator-form-title"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center shadow-sm sm:p-10">
              <div
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700"
                aria-hidden="true"
              >
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2
                id="orchestrator-form-title"
                className="mt-6 text-2xl font-bold text-gray-900"
              >
                Solicitud recibida
              </h2>
              <p className="mt-3 text-base leading-7 text-gray-600">
                Gracias, {fields.name.split(" ")[0]}. Este formulario es mock:
                no enviamos datos a ningún backend. En producción, el equipo de
                Qhipa te contactaría para iniciar el programa.
              </p>
              <button
                type="button"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-primary-400 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 transition-colors"
                onClick={() => {
                  setFields(INITIAL);
                  setSubmitted(false);
                }}
              >
                Enviar otra solicitud
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section
      id="registro"
      className="bg-white py-20 sm:py-24"
      aria-labelledby="orchestrator-form-title"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
              Registro
            </p>
            <h2
              id="orchestrator-form-title"
              className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Solicita tu lugar en el programa
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Cuéntanos sobre tu contexto. El envío es simulado: verás la
              confirmación en pantalla sin backend real.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <form
            className="mt-10 space-y-6 rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm sm:p-8"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="orchestrator-name"
                  className="block text-sm font-medium text-gray-900"
                >
                  Nombre completo *
                </label>
                <input
                  id="orchestrator-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={fields.name}
                  onChange={update("name")}
                  className="mt-2 block w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30"
                />
                <FieldError message={errors.name} />
              </div>

              <div>
                <label
                  htmlFor="orchestrator-email"
                  className="block text-sm font-medium text-gray-900"
                >
                  Correo corporativo *
                </label>
                <input
                  id="orchestrator-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={fields.email}
                  onChange={update("email")}
                  className="mt-2 block w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30"
                />
                <FieldError message={errors.email} />
              </div>

              <div>
                <label
                  htmlFor="orchestrator-role"
                  className="block text-sm font-medium text-gray-900"
                >
                  Rol actual *
                </label>
                <input
                  id="orchestrator-role"
                  name="role"
                  type="text"
                  required
                  placeholder="Ej. Engineering Manager, PO, Tech Lead"
                  value={fields.role}
                  onChange={update("role")}
                  className="mt-2 block w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30"
                />
                <FieldError message={errors.role} />
              </div>

              <div>
                <label
                  htmlFor="orchestrator-team"
                  className="block text-sm font-medium text-gray-900"
                >
                  Empresa / equipo *
                </label>
                <input
                  id="orchestrator-team"
                  name="team"
                  type="text"
                  required
                  value={fields.team}
                  onChange={update("team")}
                  className="mt-2 block w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30"
                />
                <FieldError message={errors.team} />
              </div>

              <div>
                <label
                  htmlFor="orchestrator-level"
                  className="block text-sm font-medium text-gray-900"
                >
                  Nivel actual con IA *
                </label>
                <select
                  id="orchestrator-level"
                  name="level"
                  required
                  value={fields.level}
                  onChange={update("level")}
                  className="mt-2 block w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30"
                >
                  <option value="">Selecciona una opción</option>
                  {LEVEL_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <FieldError message={errors.level} />
              </div>

              <div>
                <label
                  htmlFor="orchestrator-goal"
                  className="block text-sm font-medium text-gray-900"
                >
                  Objetivo principal *
                </label>
                <select
                  id="orchestrator-goal"
                  name="goal"
                  required
                  value={fields.goal}
                  onChange={update("goal")}
                  className="mt-2 block w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30"
                >
                  <option value="">Selecciona una opción</option>
                  {GOAL_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <FieldError message={errors.goal} />
              </div>
            </div>

            <div>
              <label
                htmlFor="orchestrator-message"
                className="block text-sm font-medium text-gray-900"
              >
                Mensaje (opcional)
              </label>
              <textarea
                id="orchestrator-message"
                name="message"
                rows={4}
                value={fields.message}
                onChange={update("message")}
                placeholder="¿Qué iniciativa te gustaría orquestar primero?"
                className="mt-2 block w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30"
              />
            </div>

            <div>
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="accepted"
                  checked={fields.accepted}
                  onChange={update("accepted")}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-500 focus:ring-primary-400"
                />
                <span className="text-sm leading-6 text-gray-600">
                  Acepto que mis datos se usen para contactarme sobre el
                  programa de orquestadores de IA con Qhipa. *
                </span>
              </label>
              <FieldError message={errors.accepted} />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-gray-500">
                * Campos obligatorios. Envío simulado en cliente.
              </p>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center rounded-full bg-primary-400 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 transition-colors disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? "Enviando…" : "Enviar solicitud"}
              </button>
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
